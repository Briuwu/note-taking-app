import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

import { AppSidebarMenu } from "./app-sidebar-menu";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="bg-neutral-0">
      <SidebarHeader className="bg-neutral-0 px-4 py-6">
        <Link href="/">
          <Image src={"/images/logo.svg"} alt="" width={95} height={28} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-0 px-4">
        <AppSidebarMenu />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
