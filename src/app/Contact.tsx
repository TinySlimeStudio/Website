
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/menu-toogle";

import ContactForm from "@/components/contact";

export default function LoginPage() {
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
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 h-full">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-4xl  font-extrabold">Contact</h3>
              <p className="max-w-3xl  text-xs text-muted-foreground mb-8 mt-1 text-center">
                Do you have any questions for me? Or maybe you're having trouble
                with the assets? Write to me, and I'll do my best to help.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full hidden lg:block">
          <img
            src="https://ui.shadcn.com/placeholder.svg"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </SidebarInset>
  );
}
