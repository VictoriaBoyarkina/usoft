import { SidebarProvider } from "@shared/components/ui/sidebar";
import { Sidebar } from "@shared/components/Sidebar";
import { Header } from "@shared/components/Header";
import { VVKRecords } from "@/pages/VVKRecords";

export default function Layout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="basis-full items-center">
        <Header />
        <main className="px-8">
          <VVKRecords />
        </main>
      </div>
    </SidebarProvider>
  );
}
