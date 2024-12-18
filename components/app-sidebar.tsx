import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { AppMenu } from "./app-menu";
import Link from "next/link";

export const AppSidebar = async () => {
  return (
    <Sidebar className="bg-neutral-0">
      <SidebarHeader className="bg-neutral-0 px-4 py-3">
        <Link href="/">
          <span className="sr-only">Logo</span>
          <Image src={"/images/logo.svg"} alt="" width={95} height={28} />
        </Link>
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
