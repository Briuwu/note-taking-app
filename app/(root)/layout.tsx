import { AppSidebar } from "@/components/app-sidebar";
import { MenuNav } from "@/components/menu-nav";
import { NotesHeader } from "@/components/notes-header";
import { SidebarProvider } from "@/components/ui/sidebar";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative grid h-full min-h-screen w-full grid-rows-[auto,1fr]">
        {children}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden">
          <MenuNav />
        </div>
      </main>
    </SidebarProvider>
  );
}
export default RootLayout;
