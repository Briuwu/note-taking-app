import { notesTable, tagsTable } from "./db/schema";

export type NotesType = typeof notesTable.$inferSelect;

export type TagsType = typeof tagsTable.$inferSelect;

export type NotesWithTags = NotesType & {
  tags: TagsType[];
};
