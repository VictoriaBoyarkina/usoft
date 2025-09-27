import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function Layout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="basis-full items-center">
        <Header />
        <main></main>
      </div>
    </SidebarProvider>
  );
}
