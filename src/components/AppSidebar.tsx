import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import { LayoutDashboard, BookOpen, Calendar, Settings, GraduationCap } from "lucide-react";

const studentMenuItems = [
  { title: "Dashboard", url: "/student/dashboard", icon: LayoutDashboard },
  { title: "My Courses", url: "/student/courses", icon: BookOpen },
  { title: "Calendar", url: "/student/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

const teacherMenuItems = [
  { title: "Dashboard", url: "/teacher/dashboard", icon: LayoutDashboard },
  { title: "My Courses", url: "/teacher/courses", icon: GraduationCap },
  { title: "Calendar", url: "/teacher/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

interface AppSidebarProps {
  userRole?: "student" | "teacher";
}

export function AppSidebar({ userRole = "student" }: AppSidebarProps) {
  const { open } = useSidebar();
  const menuItems = userRole === "teacher" ? teacherMenuItems : studentMenuItems;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-6 text-xl font-bold">
            <span className={`bg-gradient-primary bg-clip-text text-transparent ${!open && 'hidden'}`}>
              SeLaMS
            </span>
            {!open && <span className="text-primary text-2xl">S</span>}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
