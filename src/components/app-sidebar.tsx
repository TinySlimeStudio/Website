"use client"

import * as React from "react"
import {
  Command,
} from "lucide-react"

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavSecondary } from '@/components/nav-secondary'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useTheme } from "@/components/theme-provider"

import HBData from "@/app/projects/HellishBattle/HB.json"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "About Me",
      url: "/about-me",
      icon: "duo-icons:info",
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "solar:chat-round-line-bold-duotone",
    },
    
  ],
  navSecondary: [
    {
      title: "Asset Store",
      url: "https://assetstore.unity.com/publishers/63085",
      icon: "solar:cart-4-bold-duotone",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCnhLf9kMlT55ftMMKSu5Qwg",
      icon: "formkit:youtube",
    },
    {
      title: "Discord",
      url: "https://www.youtube.com/channel/UCnhLf9kMlT55ftMMKSu5Qwg",
      icon: "ic:sharp-discord",
    },
  ],
  projects: [
    {
      name: "All Projects",
      description: "",
      url: "/projects",
      icon: "solar:book-bookmark-bold-duotone",
    },
    {
      name: HBData.Title,
      description: HBData.SubTitle || "",
      url: HBData.SitePath,
      image: HBData.Icon,

    },
    {
      name: "Meet and Talk Pro",
      description: "Dialogue System",
      url: "/projects/meet-and-talk-pro",
      image: "../src/app/projects/MeetAndTalkPro/Logo.png",
    },
    {
      name: "Meet and Talk",
      description: "Dialogue System",
      url: "/projects/meet-and-talk-free",
      image: "../src/app/projects/MeetAndTalkFree/Logo.png",
    },
    {
      name: "Loot Table",
      description: "Universal Loot System",
      url: "/projects/loot-table",
      image: "../src/app/projects/LootTable/Logo.png",
    },
    {
      name: "Draw the Line",
      description: "Game Template",
      url: "/projects/draw-the-line",
      image: "../src/app/projects/DrawTheLine/Logo.png",
    },
  ],
  uncoming_projects: [
    {
      name: "Climate Manager Pro",
      description: "Advanced Environment Toolkit",
      url: "/projects/climate-manager-pro",
      image: "../src/app/projects/ClimateManagerPro/Logo.png",
    },
    {
      name: "Avatar Creator",
      description: "Character Customization System",
      url: "/projects/avatar-creator",
      image: "../src/app/projects/AvatarCreator/Logo.png",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  useTheme()
  
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                              <img
              src="../src/assets/favicon.png"
              alt="Moje zdjęcie"
              className="object-cover rounded shadow-lg"
            />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold tracking-tight" style={{ fontSize: "110%", lineHeight: "100%" }}>Tiny Slime Studio</span>
                  <span className="truncate text-xs text-muted-foreground" style={{ fontSize: "65%", lineHeight: "95%"}}>Game Developer</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projectsList={data.projects} label="Projects" />
        <NavProjects projectsList={data.uncoming_projects} label="Uncoming Projects" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}
