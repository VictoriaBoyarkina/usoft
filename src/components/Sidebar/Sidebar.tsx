import BookIcon from "@/assets/book.svg?react";
import HomeIcon from "@/assets/home.svg?react";
import InfoIcon from "@/assets/info.svg?react";
import NoteIcon from "@/assets/note.svg?react";
import PieChartIcon from "@/assets/piechart.svg?react";
import SettingsIcon from "@/assets/settings.svg?react";
import TubeIcon from "@/assets/tube.svg?react";
import {
  Sidebar as SidebarShadcn,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function Sidebar() {
  return (
    <SidebarShadcn side="left">
      <SidebarHeader className="py-7 items-center">
        <HomeIcon />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="py-12  items-center gap-y-10">
          <NoteIcon />
          <BookIcon />
          <PieChartIcon />
          <TubeIcon />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-12  items-center gap-y-10">
        <SettingsIcon />
        <InfoIcon />
      </SidebarFooter>
    </SidebarShadcn>
  );
}
