"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export function ProductCard({
    CardImage,
    CardAlt,
    Title,
    SubTitle,
    Description,
    Price,
    Version,
    Category,
    UnityVersion,
    ReleaseDate,
    StoreLink,
    DemoLink
}: {
    CardImage: string,
    CardAlt: string,
    Title: string,
    SubTitle: string,
    Description: string,
    Price: string,
    Version: string,
    Category: string,
    UnityVersion: string,
    ReleaseDate: string,
    StoreLink: string,
    DemoLink?: string,
}) {

  return (
          <div className="w-1/1 xl:w-1/3 top-4 gap-4 flex flex-col p-4 xl:p-0">
            <Card className="flex flex-col md:flex-row xl:flex-col justify-between">
              <CardContent className="md:w-full flex flex-col md:flex-row xl:flex-col items-center gap-4">
                <AspectRatio
                  ratio={16 / 9}
                  className="w-full "
                >
                  <img
                    src={CardImage}
                    alt={CardAlt}
                    className="object-cover rounded-xl shadow-lg w-full h-full"
                  />
                </AspectRatio>
                <div className="w-full">
                <div className="w-full  xl:w-full text-center">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {Title}
                  </h2>
                  <h4 className="text-xs font-light tracking-tight text-primary">
                    {SubTitle}
                  </h4>
                  <p className="mt-4 pb-2 text-xs text-muted-foreground">
                    {Description}
                  </p>
                  <div className="flex-1 flex items-center justify-center">
                    <table className="table-auto w-full text-left text-sm">
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 flex items-center text-primary">
                            <Icon icon="solar:tag-price-bold-duotone" />
                            &nbsp;<span>Price</span>
                          </td>
                          <td className="py-2 px-4 text-right font-bold">
                            <span>{Price}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-t flex items-center text-primary">
                            <Icon icon="solar:book-bold-duotone" />
                            &nbsp;<span>Version</span>
                          </td>
                          <td className="py-2 px-4 text-right border-t font-bold">
                            <span>{Version}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-t flex items-center text-primary">
                            <Icon icon="solar:archive-bold-duotone" />
                            &nbsp;<span>Category</span>
                          </td>
                          <td className="py-2 px-4 border-t text-right font-bold">
                            {Category}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-t flex items-center text-primary">
                            <Icon icon="solar:database-bold-duotone" />
                            &nbsp;<span>Min. Unity Version</span>
                          </td>
                          <td className="py-2 px-4 border-t text-right font-bold">
                            {UnityVersion}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-t flex items-center text-primary">
                            <Icon icon="solar:calendar-bold-duotone" />
                            &nbsp;<span>Release Date</span>
                          </td>
                          <td className="py-2 px-4 border-t text-right font-bold">
                            {ReleaseDate}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 md:mt-4 flex-row md:flex-col xl:flex-row">
                  <Button
                    asChild
                    variant="default"
                    className="flex-1 max-w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-center"
                  >
                    <a
                      href={StoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon="solar:cart-large-2-bold-duotone" />
                      <span>Asset Store</span>
                    </a>
                  </Button>
                  {DemoLink && (
                    <Button
                      asChild
                      variant="secondary"
                      className="flex-1 min-w-[120px] flex items-center gap-2 px-4 py-2 rounded-md text-center"
                    >
                      <a
                        href={DemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon="solar:play-bold"></Icon>
                        <span>Demo</span>
                      </a>
                    </Button>
                  
                  )}
                  
                </div>
                </div>
              </CardContent>
            </Card>
          </div>
  );
}
