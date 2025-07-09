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

export default function Error404() {
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
                  <BreadcrumbPage>Page Not Found</BreadcrumbPage>
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
        <div className="flex flex-col items-center justify-center text-center p-16">
          <Icon
            icon="solar:sad-circle-bold-duotone"
            className="text-8xl mb-4"
          />
          <div className="text-9xl font-extrabold mb-4">Error 404</div>
          <div className="text-4xl font-extrabold mb-4 text-primary">
            Oops! You've landed on a planet far, far away.
          </div>
          <div className="mb-4  text-muted-foreground  text-sm">
            It seems like you've stumbled upon a page that doesn't exist. Don't
            worry, we'll help you find your way back home.
          </div>
          <div className="flex gap-4 pt-8">
            <Button
              variant="default"
              className="font-bold"
              onClick={() => (window.location.href = "/")}
            >
              <Icon icon="solar:home-2-bold" /> Go to Homepage
            </Button>
            <Button
              variant="secondary"
              className="font-bold"
              onClick={() =>
                window.open(
                  "https://assetstore.unity.com/publishers/63085",
                  "_blank"
                )
              }
            >
              <Icon icon="solar:cart-large-2-bold-duotone" /> Asset Store
            </Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
