import { Sparkles, Shirt, Clock, LayoutDashboard } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "New Style", url: "/new", icon: Sparkles },
  { title: "Wardrobe", url: "/wardrobe", icon: Shirt },
  { title: "History", url: "/history", icon: Clock },
];

const AppSidebar = () => {
  return (
    <Sidebar className="w-60 border-r border-border">
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-display text-lg gold-text font-semibold">Stylist AI</span>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-body text-[10px] uppercase tracking-widest">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent font-body text-sm"
                      activeClassName="bg-sidebar-accent text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-border">
        <div className="glass-card p-3 text-center">
          <p className="text-xs text-muted-foreground font-body">
            Powered by <span className="gold-text font-medium">Gemini AI</span>
          </p>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
