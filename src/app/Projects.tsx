import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/menu-toogle";
import {ProductGrid} from "@/components/project-page/product-grid";

import matFData from "@/app/projects/MeetAndTalkFree/MAT_F.json";
import matPData from "@/app/projects/MeetAndTalkPro/MAT_P.json";
import hbData from "@/app/projects/HellishBattle/HB.json";
import acData from "@/app/projects/AvatarCreator/AC.json";
import cmpData from "@/app/projects/ClimateManagerPro/CMP.json";
import ltData from "@/app/projects/LootTable/LT.json";
import dtlData from "@/app/projects/DrawTheLine/DTL.json";

export default function Projects() {
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
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </Breadcrumb>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Projects</h1>
            <p className="text-xs text-muted-foreground">A collection of my completed and ongoing projects.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Unity Projects</h3>
            <p className="text-xs text-muted-foreground">A showcase of my Unity-based projects, highlighting both creativity and technical skills.</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ProductGrid data={hbData}  />
          <ProductGrid data={matPData} />
          <ProductGrid data={matFData} />
          <ProductGrid data={ltData}  />
          <ProductGrid data={dtlData}  />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Uncoming Unity Projects</h3>
            <p className="text-xs text-muted-foreground">A glimpse into future projects currently in development, showcasing upcoming ideas and innovations.</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ProductGrid data={cmpData} />
          <ProductGrid data={acData}  />
        </div>
      </div>
    </SidebarInset>
  );
}
