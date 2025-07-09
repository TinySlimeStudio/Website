import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {ModeToggle} from "@/components/menu-toogle";

export default function ComingSoon() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4  w-full">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex justify-between items-center w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Coming Soon</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center h-full">
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: "0.75",
                            fontSize: "22rem", // Custom font size
                            fontWeight: 800, // Custom font weight
                            color: "rgba(128, 128, 128, 0.01)", // Custom color with opacity
                            overflow: "hidden", // Prevent horizontal scrolling
                            width: "100%", // Ensure it doesn't exceed the viewport width
                            textAlign: "center", // Center the text
                            pointerEvents: "none", // Prevent the element from being clickable
                          }}
                        >
                          Coming Soon
                        </div>
        <div className="flex flex-col items-center justify-center text-center p-16">
            <div className="relative">

              <div className="text-5xl sm:text-7xl xl:text-9xl font-extrabold mb-4">
              Coming Soon
              </div>
            </div>
            <div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold mb-4 text-primary">
            More information will appear in the future!
            </div>
            <div className="mb-4 text-muted-foreground text-sm">
            If you want to stay updated with my projects, visit Discord
            </div>
          <div className="flex gap-4 pt-8">
            <Button
              variant="default"
              className="font-bold"
              onClick={() => window.open("https://discord.gg/KtHKbYjBMS", "_blank")}
            >
              <Icon icon="ic:outline-discord" /> Join Discord
            </Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
