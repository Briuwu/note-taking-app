import Form from "next/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export const SearchForm = () => {
  return (
    <div className="flex items-center space-x-4">
      <Form action="/" className="relative">
        <Button variant="ghost" className="absolute" size="icon">
          <Image
            src={"/images/icon-search.svg"}
            alt="search icon"
            width={24}
            height={24}
            className="h-5 w-5"
          />
        </Button>
        <Input
          name="query"
          className="text-preset-5 w-[300px] pl-10"
          placeholder="Search by title, content, or tags…"
        />
      </Form>
      <Button variant="ghost" size="icon">
        <Image
          src={"/images/icon-settings.svg"}
          alt="settings icon"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
};
