"use client";
import { Button } from "./ui/button";

export const FontSwitcher = () => {
  return (
    <div>
      <Button
        onClick={() => {
          localStorage.setItem("data-font", "inter");
          const font = document.querySelector(".font-provider");
          font!.setAttribute("data-font", "inter");
        }}
      >
        Inter
      </Button>
      <Button
        onClick={() => {
          localStorage.setItem("data-font", "noto-serif");
          const font = document.querySelector(".font-provider");
          font!.setAttribute("data-font", "noto-serif");
        }}
      >
        Noto Serif
      </Button>
      <Button
        onClick={() => {
          localStorage.setItem("data-font", "source-code-pro");
          const font = document.querySelector(".font-provider");
          font!.setAttribute("data-font", "source-code-pro");
        }}
      >
        Source Code Pro
      </Button>
    </div>
  );
};
