"use server";

import { db } from "@/db";
import { notes, tags } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export async function getAllNotes() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const notesData = await db.query.notes.findMany({
    where: eq(notes.userId, user.id),
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

  const noteData = await db.query.notes.findFirst({
    where: and(eq(notes.userId, user.id), eq(notes.id, id)),
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
    .insert(notes)
    .values({
      userId: user.id,
      title,
      content,
    })
    .returning({ insertedId: notes.id });

  if (!noteData) {
    throw new Error("Note not found");
  }

  for (const tag of allTags) {
    await db.insert(tags).values({
      name: tag,
      noteId: noteData[0].insertedId,
    });
  }
}
