import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import BentoDashboard from "@/components/BentoDashboard";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border px-4 shrink-0">
            <SidebarTrigger>
              <Menu className="w-5 h-5 text-muted-foreground" />
            </SidebarTrigger>
          </header>
          <BentoDashboard />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
