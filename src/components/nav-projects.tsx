"use client";

import {  MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

import { Icon } from "@iconify/react";

export function NavProjects({
  label,
  projectsList,
}: {
  label?: string;
  projectsList: {
    name: string;
    description: string;
    url: string;
    icon?: string;
    image?: string;
    badge?: string;

    AssetStore?: string;
    Documentation?: string;
    Roadmap?: string;
    Tutorials?: string;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu className='gap-0'>
        {projectsList.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className={item.image ? "mb-0" : "mb-0"}
          >
            <SidebarMenuButton asChild>
              <a href={item.url} className=" h-10">
                {item.icon && <Icon icon={item.icon} className="!size-8"/>}
                {item.image && (
                  <img
                    src={item.image}
                    className="!size-8 rounded-xs"
                  />
                )}
                {item.badge && (
                  <Badge
                    variant={"secondary"}
                    className="ml-2 text-xs md:font-mono ml-0"
                  >
                    {item.badge}
                  </Badge>
                )}
                <span className="flex flex-col gap-0 mt-1">
                  {item.description && (
                    <span className="font-bold tracking-tight" style={{ lineHeight: "90%" }}>{item.name}</span>
                  )}
                  {!item.description && <span className="pb-0.5">{item.name}</span>}
                  {item.description && (
                    <span
                      style={{ fontSize: "65%" }}
                      className="text-muted-foreground"
                    >
                      {item.description}
                    </span>
                  )}
                </span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem asChild>
                  <a href={item.AssetStore} target="_blank" rel="noopener noreferrer">
                  <Icon icon="solar:cart-4-bold-duotone"></Icon>
                  <span>Asset Store</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="solar:documents-bold-duotone"></Icon>
                  <span>Documentation</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="solar:map-bold-duotone"></Icon>
                  <span>Roadmap</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="solar:video-library-bold-duotone"></Icon>
                  <span>Video Tutorials</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem></SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
