import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { ModeToggle } from "@/components/menu-toogle";
import { CarouselWithThumbs } from "@/components/project-page/carousel-09";
import {ProductCard} from "@/components/project-page/product-card";

import { PatchNote } from "@/components/project-page/patch-note-element";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";



export default function ProjectTemplate({
    data,
    children
}: {
    data: { Category: string; [key: string]: any },
    children?: React.ReactNode
}) {

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
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {data.Title }
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col  gap-4 p-4 pt-0">
        <div className="flex flex-col-reverse xl:flex-row">
          <div className="w-1/1 xl:w-2/3 flex flex-col gap-4 px-4">
            <div className="w-full">
              <CarouselWithThumbs
                images={data.images.map((image: { url: any; alt: any; }) => ({
                  src: image.url,
                  alt: image.alt,
                }))}
              />
            </div>

            {/* Description */}
            <Card className=" w-full">
              <CardContent className="gap-2 flex flex-col">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Description
                </h2>
                {children}

                <h4 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
                  Additional Links
                </h4>
                <Card className="py-4">
                  <CardHeader>
                    <CardTitle>Online Documentation</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      Card Description
                    </CardDescription>
                    <CardAction>
                      <Button variant="outline">
                        <Icon icon={"solar:link-bold-duotone"} /> Button
                      </Button>
                    </CardAction>
                  </CardHeader>
                </Card>
                <Card className="py-4">
                  <CardHeader>
                    <CardTitle>Roadmap</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      Card Description
                    </CardDescription>
                    <CardAction>
                      <Button variant="outline">
                        <Icon icon={"solar:link-bold-duotone"} /> Button
                      </Button>
                    </CardAction>
                  </CardHeader>
                </Card>
                <Card className="py-4">
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      Card Description
                    </CardDescription>
                    <CardAction>
                      <Button variant="outline">
                        <Icon icon={"solar:link-bold-duotone"} /> Button
                      </Button>
                    </CardAction>
                  </CardHeader>
                </Card>
              </CardContent>
            </Card>

            {/* Render pipeline compatibility */}
            <Card className=" w-full">
              <CardContent className="gap-2 flex flex-col">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Render pipeline compatibility
                </h2>
                <p className="text-xs text-muted-foreground">
                  The Built-in Render Pipeline is Unity’s default render
                  pipeline. It is a general-purpose render pipeline that has
                  limited options for customization. The Universal Render
                  Pipeline (URP) is a Scriptable Render Pipeline that is quick
                  and easy to customize, and lets you create optimized graphics
                  across a wide range of platforms. The High Definition Render
                  Pipeline (HDRP) is a Scriptable Render Pipeline that lets you
                  create cutting-edge, high-fidelity graphics on high-end
                  platforms.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full mt-2 ">
                    <thead>
                      <tr>
                        <th className="text-sm px-2 py-1 text-left w-1/4">
                          Unity Version
                        </th>
                        <th className="text-sm px-2 py-1 text-left w-1/4">
                          Built-in
                        </th>
                        <th className="text-sm px-2 py-1 text-left w-1/4">
                          URP
                        </th>
                        <th className="text-sm px-2 py-1 text-left w-1/4">
                          HDRP
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-sm px-2 py-1 border-t">6000.x</td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="green">
                            <Icon icon="solar:check-circle-bold-duotone" />
                            Compatible
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm px-2 py-1 border-t">2023.x</td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="green">
                            <Icon icon="solar:check-circle-bold-duotone" />
                            Compatible
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm px-2 py-1 border-t">2022.x</td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="green">
                            <Icon icon="solar:check-circle-bold-duotone" />
                            Compatible
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm px-2 py-1 border-t">2021.3</td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="green">
                            <Icon icon="solar:check-circle-bold-duotone" />
                            Compatible
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                        <td className="px-2 py-1 border-t">
                          <Badge variant="yellow">
                            <Icon icon="solar:danger-triangle-bold-duotone" />
                            Manual
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                  <p className="px-6 pb-2 text-xs text-center text-muted-foreground">
                    This Package uses the Built-in Render Pipeline. If you want
                    to use URP or HDRP you have to convert the project to other
                    pipelines yourself.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related keywords */}
            <Card className=" w-full">
              <CardContent className="gap-2 flex flex-col">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Related keywords
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.Tags.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                    <Badge key={index} variant="secondary" className="pr-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Patch Notes */}
            <Card className=" w-full">
              <CardContent className="gap-2 flex flex-col">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Patch Notes
                </h2>
                <PatchNote notes={data.notes} />
              </CardContent>
            </Card>
          </div>

          <ProductCard 
          CardImage={data.CardImage}
          CardAlt={data.CardAlt}
          Title={data.Title}
          SubTitle={data.SubTitle}
          Description={data.Description}
          Price={data.Price}
          Version={data.Version}
          Category={data.Category}
          UnityVersion={data.UnityVersion}
          ReleaseDate={data.ReleaseDate}
          StoreLink={data.StoreLink}
          />
        </div>
      </div>
    </SidebarInset>
  );
}
