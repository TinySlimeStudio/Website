"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function CarouselWithThumbs({
  images,
}: {
  images: {
    src: string
    alt: string
  }[]
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
            {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="py-0">
              <CardContent className="flex aspect-video items-center justify-center p-0">
          <AspectRatio ratio={16 / 9}>
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-xl shadow-lg w-full h-full"
          />
          </AspectRatio>
              </CardContent>
              </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>

      <Carousel className="mt-4 w-full px-12">
        <CarouselContent className="flex my-1">
        {images.map((image, index) => (
          
        <CarouselItem
          key={index}
          className={cn(
          "cursor-pointer md:basis-1/2 lg:basis-1/4",
          current === index + 1 ? "opacity-100" : "opacity-50"
          )}
          onClick={() => handleThumbClick(index)}
        >
          <Card className="py-0">
          <CardContent className="p-0 flex items-center justify-center">
            <AspectRatio ratio={16 / 9}>
            <img
          src={image.src}
          alt={image.alt}
          className="object-cover rounded-xl shadow-lg w-full h-full"
            />
            </AspectRatio>
          </CardContent>
          </Card>
        </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12"  />
      </Carousel>
    </div>
  );
}
