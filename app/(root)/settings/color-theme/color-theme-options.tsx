"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { useState } from "react";

export const ColorThemeOptions = () => {
  const [theme, setTheme] = useState("light");
  const onThemeChange = (theme: string) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex max-w-[528px] flex-col gap-6">
      <RadioGroup
        defaultValue={theme}
        onValueChange={(value) => setTheme(value)}
      >
        <Label className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl border border-neutral-200 p-4 hover:bg-neutral-200">
          <div className="grid h-10 w-10 place-content-center rounded-xl border border-neutral-200">
            <Image src={"/images/icon-sun.svg"} alt="" width={24} height={24} />
          </div>
          <div>
            <p className="text-preset-4 text-neutral-950">Light Mode</p>
            <p className="text-preset-6 text-neutral-700">
              Pick a clean and classic light theme
            </p>
          </div>
          <RadioGroupItem value="light" id="light" />
        </Label>
        <Label className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl border border-neutral-200 p-4 hover:bg-neutral-200">
          <div className="grid h-10 w-10 place-content-center rounded-xl border border-neutral-200">
            <Image
              src={"/images/icon-moon.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <div>
            <p className="text-preset-4 text-neutral-950">Dark Mode</p>
            <p className="text-preset-6 text-neutral-700">
              Select a sleek and modern dark theme
            </p>
          </div>
          <RadioGroupItem value="dark" id="dark" />
        </Label>
        {/* <Label className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl border border-neutral-200 p-4 hover:bg-neutral-200">
          <div className="grid h-10 w-10 place-content-center rounded-xl border border-neutral-200">
            <Image src={"/images/icon-sun.svg"} alt="" width={24} height={24} />
          </div>
          <div>
            <p className="text-preset-4 text-neutral-950">System</p>
            <p className="text-preset-6 text-neutral-700">
              Adapts to your device&amp;s theme
            </p>
          </div>
          <RadioGroupItem value="system" id="system" />
        </Label> */}
      </RadioGroup>
      <Button
        onClick={() => onThemeChange(theme)}
        className="self-end bg-blue-500"
      >
        Apply Changes
      </Button>
    </div>
  );
};
