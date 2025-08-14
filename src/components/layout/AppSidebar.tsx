import { 
  LayoutDashboard, 
  Users, 
  GamepadIcon, 
  Settings, 
  Shield, 
  Map, 
  FileText, 
  Trophy, 
  Car, 
  Home,
  Calendar,
  Activity,
  AlertTriangle,
  Database
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuSections = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Server Status", url: "/server-status", icon: Activity },
    ]
  },
  {
    title: "Staff Management",
    items: [
      { title: "Staff Calendar", url: "/staff/calendar", icon: Calendar },
      { title: "Staff Ranks", url: "/staff/ranks", icon: Shield },
      { title: "Staff Logs", url: "/staff/logs", icon: FileText },
    ]
  },
  {
    title: "Player Management",
    items: [
      { title: "Player Data", url: "/players/data", icon: Users },
      { title: "Trust Score", url: "/players/trustscore", icon: Trophy },
      { title: "Punishments", url: "/players/punishments", icon: AlertTriangle },
      { title: "Live Map", url: "/players/map", icon: Map },
      { title: "User Logs", url: "/players/logs", icon: FileText },
    ]
  },
  {
    title: "Game Management",
    items: [
      { title: "Characters", url: "/game/characters", icon: Users },
      { title: "Vehicles", url: "/game/vehicles", icon: Car },
      { title: "Properties", url: "/game/properties", icon: Home },
      { title: "Leaderboards", url: "/game/leaderboards", icon: Trophy },
      { title: "Game Logs", url: "/game/logs", icon: Database },
    ]
  },
  {
    title: "Panel Management",
    items: [
      { title: "Panel Settings", url: "/panel/settings", icon: Settings },
      { title: "Discord Logs", url: "/panel/discord-logs", icon: FileText },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium border-l-2 border-primary shadow-glow" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <GamepadIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">FiveM Panel</h2>
              <p className="text-xs text-sidebar-foreground/60">Staff Management</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {menuSections.map((section) => (
          <SidebarGroup key={section.title} className="mb-4">
            {!collapsed && (
              <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-semibold mb-2 px-2">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end={item.url === "/"} 
                        className={getNavCls}
                      >
                        <item.icon className="w-4 h-4" />
                        {!collapsed && <span className="ml-3">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}