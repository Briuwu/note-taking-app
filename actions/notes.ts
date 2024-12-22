"use server";

import { db } from "@/db";
import { notesTable, tagsTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export async function getAllNotes() {
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
}

export async function getNote({ id }: { id: number }) {
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
}

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
}
