"use client";
import { NotesWithTags } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import { ShowNoteOptions } from "./show-note-options";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { unarchiveNote, deleteNote, updateNote } from "@/actions/notes";
import { toast } from "sonner";
import Link from "next/link";
import NoteOptionsMobile from "./note-options-mobile";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  tags: z.string().min(2),
  content: z.string().min(2),
});

type Props = {
  note: NotesWithTags;
};

export const ShowNote = ({ note }: Props) => {
  const tagsName = note.tags.map((tag) => tag.name).join(", ");
  const noteTitle = note.title;
  const noteContent = note.content;
  const noteId = note.id;
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: noteTitle,
      tags: tagsName,
      content: noteContent,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const { title, tags, content } = values;

      const tagsArray = tags.split(",").map((tag) => tag.trim());

      await updateNote({
        id: note.id,
        title,
        content,
        allTags: tagsArray,
      });

      toast.success(
        <div className="text-preset-6 flex w-[274px] items-center gap-2 text-neutral-950 md:w-[390px]">
          <Image
            src={"/images/icon-checkmark.svg"}
            alt=""
            width={24}
            height={24}
          />
          Note updated successfully!
        </div>,
      );
    });
  }

  const handleUnarchive = () => {
    startTransition(async () => {
      await unarchiveNote(noteId);

      toast.success("Note archived successfully");
    });
  };

  const handleDeleteBtn = () => {
    startTransition(async () => {
      await deleteNote(noteId);

      toast.success("Note deleted successfully");
    });
  };

  return (
    <>
      <NoteOptionsMobile
        onDeleteBtn={handleDeleteBtn}
        onUnarchiveBtn={handleUnarchive}
        isPending={isPending}
      />
      <div className="flex flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-14 grid flex-1 grid-rows-[auto,1fr,auto] border-neutral-200 lg:mb-0 lg:border-r"
          >
            <div className="space-y-4 border-neutral-200 px-6 py-5 lg:border-b">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="text-preset-1 text-neutral-950">
                      <Input
                        disabled={isPending}
                        placeholder="Enter a title..."
                        className="text-preset-1 border-0 shadow-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex w-[115px] items-center gap-2">
                    <Image
                      src={"/images/icon-tag.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="h-4 w-4"
                    />
                    <p className="text-preset-5 text-neutral-700">Tags</p>
                  </div>
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem className="text-preset-5 flex-1 text-neutral-950">
                        <FormControl>
                          <Input
                            disabled={isPending}
                            placeholder="Add tags separated by commas (e.g. Work, Planning)"
                            className="text-preset-5 h-auto rounded-none border-0 border-black p-0 shadow-none focus-visible:border-b focus-visible:ring-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {note.is_archived && (
                  <div className="flex items-center gap-2">
                    <div className="flex w-[115px] items-center gap-2">
                      <Image
                        src={"/images/icon-status.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="h-4 w-4"
                      />
                      <p className="text-preset-5 text-neutral-700">Status</p>
                    </div>
                    <span className="text-preset-5 text-neutral-950">
                      Archived
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="flex w-[115px] items-center gap-2">
                    <Image
                      src={"/images/icon-clock.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="h-4 w-4"
                    />
                    <p className="text-preset-5 text-neutral-700">
                      Last Edited
                    </p>
                  </div>
                  <span className="text-preset-5 text-neutral-950">
                    {note.updatedAt
                      ? format(new Date(note.updatedAt), "MMM dd, yyyy")
                      : format(new Date(note.createdAt), "MMM dd, yyyy")}
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch px-6 py-4">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="text-preset-5 h-full text-neutral-950">
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        className="text-preset-5 h-full resize-none whitespace-pre-line border-0 text-neutral-800 shadow-none"
                        placeholder="Start typing your note here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 border-t border-neutral-200 px-6 py-5">
              <Button
                type="submit"
                className="text-preset-4 block bg-blue-500 text-neutral-0"
                disabled={isPending}
              >
                Update
              </Button>
              <Button
                type="button"
                className="text-preset-4 block bg-neutral-100 text-neutral-600"
                disabled={isPending}
                asChild
              >
                <Link href="/">Cancel</Link>
              </Button>
            </div>
          </form>
        </Form>
        <ShowNoteOptions
          onDeleteBtn={handleDeleteBtn}
          onUnarchiveBtn={handleUnarchive}
          isPending={isPending}
        />
      </div>
    </>
  );
};
