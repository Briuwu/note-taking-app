import { notes, tags } from "./db/schema";

export type NotesType = typeof notes.$inferSelect;

export type TagsType = typeof tags.$inferSelect;

export type NotesWithTags = NotesType & {
  tags: TagsType[];
};
