import { Button } from "@/components/ui/button";
import { NotesWithTags } from "@/types";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  note: NotesWithTags;
};

export const ShowNote = ({ note }: Props) => {
  const tagsName = note.tags.map((tag) => tag.name).join(", ");
  return (
    <div className="flex">
      <div className="flex-1 border-neutral-200 lg:border-r">
        <div className="space-y-4 border-neutral-200 px-6 py-5 lg:border-b">
          <p className="text-preset-1 text-neutral-950">{note.title}</p>
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
              <span className="text-preset-5 text-neutral-950">{tagsName}</span>
            </div>
            {!note.is_archived && (
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
                <span className="text-preset-5 text-neutral-950">Archived</span>
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
                <p className="text-preset-5 text-neutral-700">Last Edited</p>
              </div>
              <span className="text-preset-5 text-neutral-950">
                {note.updatedAt
                  ? format(new Date(note.updatedAt), "dd MMM yyyy")
                  : format(new Date(note.createdAt), "dd MMM yyyy")}
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-preset-5 whitespace-pre-line text-neutral-800">
            {note.content.replace(/\\n/g, "\n")}
          </p>
        </div>
      </div>
      <div className="hidden max-w-[258px] space-y-3 px-4 py-5 lg:block">
        <Button className="w-full justify-start" variant="outline">
          <Image
            src={"/images/icon-archive.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="text-preset-4 text-neutral-950">Archive Note</span>
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Image
            src={"/images/icon-delete.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="text-preset-4 text-neutral-950">Delete Note</span>
        </Button>
      </div>
    </div>
  );
};
