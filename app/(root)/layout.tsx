import { AppSidebar } from "@/components/app-sidebar";
import { NotesHeader } from "@/components/notes-header";
import { SidebarProvider } from "@/components/ui/sidebar";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <NotesHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
export default RootLayout;
