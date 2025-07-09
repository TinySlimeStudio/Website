"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "../ui/avatar";

export function ProductGrid({
    data
}: {
    data: { Category: string; [key: string]: any },
}) {

  return (
    <a href={data.SitePath}>
          <Card className="p-0 gap-4 h-full">
            
            <CardHeader className="px-0">
              <AspectRatio ratio={16 / 9} className="w-full ">
                <div className="relative w-full h-full">
                  <img
                    src={data.CardImage}
                    alt="MeetAndTalk Header"
                    className="object-cover rounded-xl shadow-lg w-full h-full"
                  />
                  <Badge
                    variant={"default"}
                    className="absolute top-2 right-2 font-bold"
                  >
                    {data.Category}
                  </Badge>
                </div>
              </AspectRatio>
                <div className="px-2 flex items-center justify-between w-full">
 <span className="flex flex-row items-center gap-1">
 <Avatar  className="rounded-lg mt-1.5" >
  <AvatarImage src={data.Icon}/>
</Avatar>
                  <div className="flex flex-col gap-1 pt-2">
                    <CardTitle className="text-2xl" style={{ lineHeight: 0.75 }}>{data.Title}</CardTitle>
                  <CardDescription className="text-xs text-primary" style={{ lineHeight: 0.75 }}>{data.SubTitle}</CardDescription>
                  </div>
                  </span>
                  <div>
                    <Badge variant={"secondary"}>{data.Price}</Badge>
                  </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 px-2 pb-2">
                <p className="line-clamp-3 text-xs text-muted-foreground">
                {data.Description}
                </p>
                <span className="flex flex-wrap gap-1 pt-2">
                  <Badge variant={"secondary"}>{data.MainTag_1}</Badge>
                  <Badge variant={"secondary"}>{data.MainTag_2}</Badge>
                  <Badge variant={"secondary"}>{data.MainTag_3}</Badge>
                </span>
            </CardContent>
          </Card>
          </a>
  );
}
