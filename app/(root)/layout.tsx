import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative w-full dark:bg-neutral-950 dark:text-neutral-200">
        {children}
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
