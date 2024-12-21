"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string().min(2),
  tags: z.string().min(2),
  content: z.string().min(2),
});

export function CreateNoteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tags: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-rows-[auto,1fr] gap-4"
      >
        <div className="space-y-4 border-b border-neutral-200 pb-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="text-preset-1">
                <FormControl>
                  <Input
                    placeholder="Enter a title..."
                    {...field}
                    className="border-0 text-black placeholder-black shadow-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="text-preset-5 flex items-center gap-2 space-y-0">
                <FormLabel className="flex items-center gap-[6px] font-normal">
                  <Image
                    src={"/images/icon-tag.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="aspect-square w-4"
                  />
                  <span>Tags</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add tags separated by commas (e.g. Work, Planning)"
                    {...field}
                    className="border-0 text-black placeholder-black shadow-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="text-preset-5 flex h-full min-h-[calc(100vh-350px)] space-y-0 border-b border-neutral-200">
              <FormControl>
                <Textarea
                  placeholder="Start typing your note here…"
                  {...field}
                  className="h-full resize-none border-0 text-black placeholder-black shadow-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            className="text-preset-4 justify-self-start bg-blue-500 text-white"
          >
            Submit
          </Button>
          <Button
            type="button"
            className="text-preset-4 justify-self-start bg-neutral-100 text-neutral-600"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
