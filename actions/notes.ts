"use server";

import { db } from "@/db";
import { notesTable, tagsTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getAllNotes = cache(async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const notesData = await db.query.notesTable.findMany({
    where: eq(notesTable.userId, user.id),
    with: {
      tags: true,
    },
  });

  if (!notesData) {
    return [];
  }

  return notesData;
});

export const getNote = cache(async (id: number) => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const noteData = await db.query.notesTable.findFirst({
    where: and(eq(notesTable.userId, user.id), eq(notesTable.id, id)),
    with: {
      tags: true,
    },
  });

  if (!noteData) {
    throw new Error("Note not found");
  }

  return noteData;
});

export async function archiveNote(noteId: number) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db
    .update(notesTable)
    .set({
      is_archived: true,
    })
    .where(and(eq(notesTable.userId, user.id), eq(notesTable.id, noteId)));

  revalidatePath("/notes");
}

export async function deleteNote(noteId: number) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db
    .delete(notesTable)
    .where(and(eq(notesTable.userId, user.id), eq(notesTable.id, noteId)));

  revalidatePath("/notes");
}

export const getAllTags = cache(async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const tagsData = await db.query.tagsTable.findMany({
    where: eq(tagsTable.userId, user.id),
  });

  if (!tagsData) {
    return [];
  }

  return tagsData;
});

export async function addNote({
  title,
  content,
  allTags,
}: {
  title: string;
  content: string;
  allTags: string[];
}) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const noteData = await db
    .insert(notesTable)
    .values({
      userId: user.id,
      title,
      content,
    })
    .returning({ insertedId: notesTable.id });

  if (!noteData) {
    throw new Error("Note not found");
  }

  for (const tag of allTags) {
    await db.insert(tagsTable).values({
      name: tag,
      noteId: noteData[0].insertedId,
    });
  }

  revalidatePath("/");
  redirect(`/notes/${noteData[0].insertedId}`);
}

export async function updateNote({
  id,
  title,
  content,
  allTags,
}: {
  id: number;
  title: string;
  content: string;
  allTags: string[];
}) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db
    .update(notesTable)
    .set({
      title,
      content,
    })
    .where(and(eq(notesTable.userId, user.id), eq(notesTable.id, id)));

  await db.delete(tagsTable).where(eq(tagsTable.noteId, id));

  for (const tag of allTags) {
    await db.insert(tagsTable).values({
      name: tag,
      noteId: id,
    });
  }

  revalidatePath(`/notes/${id}`);
}
