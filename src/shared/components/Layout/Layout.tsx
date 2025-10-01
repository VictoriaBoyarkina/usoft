import { Header } from "@shared/components/Header";
import { Sidebar } from "@shared/components/Sidebar";
import { SidebarProvider } from "@shared/components/ui/sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="basis-full items-center">
        <Header />
        <main className="px-8 py-7">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
