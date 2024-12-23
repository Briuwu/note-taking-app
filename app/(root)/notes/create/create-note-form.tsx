"use client";

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
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { addNote } from "@/actions/notes";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  tags: z.string().min(2),
  content: z.string().min(2),
});

export function CreateNoteForm() {
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tags: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const { title, tags, content } = values;

      const tagsArray = tags.split(",").map((tag) => tag.trim());

      console.log(tagsArray);
      console.log(title, content);

      await addNote({
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
          Note saved successfully!
        </div>,
      );
    });
  }

  return (
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
                          className="text-preset-5 border-0 shadow-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex w-[115px] items-center gap-2">
                  <Image
                    src={"/images/icon-clock.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="h-4 w-4"
                  />
                  <p className="text-preset-5 text-neutral-700">Last Edited</p>
                </div>
                <span className="text-preset-5 text-neutral-950">
                  Not yet saved.
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
          <div className="border-t border-neutral-200 px-6 py-5">
            <Button type="submit" className="block">
              Submit
            </Button>
          </div>
        </form>
      </Form>
      <div className="hidden w-[258px] space-y-3 px-4 py-5 lg:block"></div>
    </div>
  );
}
