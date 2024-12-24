import { MainHeader } from "../components/main-header";
import { SettingsNav } from "./settings-nav";

export default function SettingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-rows-[auto,1fr]">
      <MainHeader isSettings />
      <div className="grid h-full grid-cols-[auto,1fr]">
        <div className="border-r border-neutral-200">
          <SettingsNav />
        </div>
        <div className="flex flex-col lg:p-8">{children}</div>
      </div>
    </div>
  );
}
