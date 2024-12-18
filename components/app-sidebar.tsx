import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { AppMenu } from "./app-menu";

export const AppSidebar = async () => {
  return (
    <Sidebar className="bg-neutral-0">
      <SidebarHeader className="bg-neutral-0 px-4 py-3">
        <Image src={"/images/logo.svg"} alt="" width={95} height={28} />
      </SidebarHeader>
      <SidebarContent className="bg-neutral-0 px-4 py-3">
        <SidebarGroup>
          <AppMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
