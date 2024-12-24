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
import { archiveNote, deleteNote, updateNote } from "@/actions/notes";
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

  const handleArchiveBtn = () => {
    startTransition(async () => {
      await archiveNote(noteId);

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
        onArchiveBtn={handleArchiveBtn}
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
                        className="text-preset-1 border-0 shadow-none dark:text-white"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#0E121B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        className="dark:stroke-white"
                        d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke="#0E121B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        className="dark:stroke-white"
                        d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
                      Tags
                    </p>
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
                            className="text-preset-5 h-auto rounded-none border-0 border-black p-0 shadow-none focus-visible:border-b focus-visible:ring-0 dark:text-white"
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.65775 6.3478C5.92811 6.07743 6.36646 6.07742 6.63682 6.34778L7.51281 7.22375C7.78317 7.49411 7.78318 7.93245 7.51282 8.20282C7.24246 8.47319 6.80412 8.47319 6.53375 8.20283L5.65777 7.32687C5.3874 7.05651 5.38739 6.61816 5.65775 6.3478ZM7.51267 15.794C7.78312 16.0643 7.78324 16.5026 7.51295 16.7731L5.92417 18.3627C5.65388 18.6332 5.21553 18.6333 4.9451 18.363C4.67466 18.0927 4.67454 17.6545 4.94482 17.384L6.5336 15.7943C6.80389 15.5238 7.24224 15.5237 7.51267 15.794ZM15.1052 15.794C15.3756 15.5237 15.8139 15.5238 16.0842 15.7943L17.673 17.384C17.9433 17.6545 17.9432 18.0927 17.6727 18.363C17.4023 18.6333 16.964 18.6332 16.6937 18.3627L15.1049 16.7731C14.8346 16.5026 14.8347 16.0643 15.1052 15.794Z"
                          fill="#2B303B"
                          className="dark:fill-neutral-300"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.308 4.5835C11.6904 4.5835 12.0003 4.89346 12.0003 5.2758V5.93838C12.0003 6.32073 11.6904 6.63069 11.308 6.63069C10.9257 6.63069 10.6157 6.32073 10.6157 5.93838V5.2758C10.6157 4.89346 10.9257 4.5835 11.308 4.5835ZM2.82373 11.9989C2.82373 11.6166 3.13369 11.3066 3.51604 11.3066H5.24746C5.62981 11.3066 5.93977 11.6166 5.93977 11.9989C5.93977 12.3812 5.62981 12.6912 5.24746 12.6912H3.51604C3.13369 12.6912 2.82373 12.3812 2.82373 11.9989ZM16.6764 11.9989C16.6764 11.6166 16.9862 11.3066 17.3687 11.3066H19.6157C19.998 11.3066 20.308 11.6166 20.308 11.9989C20.308 12.3812 19.998 12.6912 19.6157 12.6912H17.3687C16.9862 12.6912 16.6764 12.3812 16.6764 11.9989ZM11.308 17.3672C11.6904 17.3672 12.0003 17.6772 12.0003 18.0596V20.3067C12.0003 20.689 11.6904 20.999 11.308 20.999C10.9257 20.999 10.6157 20.689 10.6157 20.3067V18.0596C10.6157 17.6772 10.9257 17.3672 11.308 17.3672Z"
                          fill="#2B303B"
                          className="dark:fill-neutral-300"
                        />
                      </svg>

                      <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
                        Status
                      </p>
                    </div>
                    <span className="text-preset-5 text-neutral-950">
                      Archived
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="flex w-[115px] items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z"
                        fill="#2B303B"
                        className="dark:fill-neutral-300"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z"
                        fill="#2B303B"
                        className="dark:fill-neutral-300"
                      />
                    </svg>

                    <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
                      Last Edited
                    </p>
                  </div>
                  <span className="text-preset-5 text-neutral-950 dark:text-neutral-300">
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
                        className="text-preset-5 h-full resize-none whitespace-pre-line border-0 text-neutral-800 shadow-none dark:text-neutral-100"
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
          onArchiveBtn={handleArchiveBtn}
          isPending={isPending}
        />
      </div>
    </>
  );
};
