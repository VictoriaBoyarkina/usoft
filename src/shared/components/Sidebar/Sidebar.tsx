import BookIcon from "@shared/assets/book.svg?react";
import HomeIcon from "@shared/assets/home.svg?react";
import InfoIcon from "@shared/assets/info.svg?react";
import NoteIcon from "@shared/assets/note.svg?react";
import PieChartIcon from "@shared/assets/piechart.svg?react";
import SettingsIcon from "@shared/assets/settings.svg?react";
import TubeIcon from "@shared/assets/tube.svg?react";
import {
  Sidebar as SidebarShadcn,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@shared/components/ui/sidebar";
import { RouterPaths } from "@shared/config/pagePaths";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <SidebarShadcn side="left">
      <SidebarHeader className="py-7 items-center">
        <Link to={RouterPaths.VVK_RECORDS}>
          <HomeIcon />
        </Link>
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
