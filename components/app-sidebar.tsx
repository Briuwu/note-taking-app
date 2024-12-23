import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

import { AppSidebarMenu } from "./app-sidebar-menu";
import Link from "next/link";
import { Tags } from "../app/(root)/components/tags";
import { getAllTags } from "@/actions/notes";

export async function AppSidebar() {
  const tags = await getAllTags();

  const uniqueTags = Array.from(new Set(tags.map((tag) => tag.name)));
  return (
    <Sidebar className="bg-neutral-0">
      <SidebarHeader className="bg-neutral-0 px-4 py-6">
        <Link href="/">
          <Image src={"/images/logo.svg"} alt="" width={95} height={28} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-0 px-4">
        <AppSidebarMenu />
        <div className="mt-2 border-t border-neutral-200 py-2">
          <Tags tags={uniqueTags} />
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
