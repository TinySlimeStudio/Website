import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Icon } from "@iconify/react";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: string
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
      <SidebarMenu className="flex flex-row gap-0 items-center justify-center">
        {items.map((item) => (
        <SidebarMenuItem key={item.title} className="flex flex-col items-center w-full">
          <SidebarMenuButton asChild size="sm" className="h-full w-full">
        <a href={item.url} className="flex flex-col items-center !gap-1 w-full">
        <Icon icon={item.icon} className="!size-6" />
        <span className="text-xs
         ">{item.title}</span>
        </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        ))}
      </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
