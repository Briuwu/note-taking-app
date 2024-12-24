import { ColorThemeOptions } from "./color-theme-options";

export default function ColorThemePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-preset-3 text-neutral-950 dark:text-white">
          Color Theme
        </h1>
        <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
          Choose your color theme:
        </p>
      </div>
      <ColorThemeOptions />
    </div>
  );
}
