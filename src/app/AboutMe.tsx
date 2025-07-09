import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "2010-2016",
    title: "Primary and Preschool Complex in Jaktorów",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
  {
    date: "2016-2019",
    title: "Konstanty Ildefons Gałczyński Middle School in Jaktorów",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
  {
    date: "2019-2023",
    title: "School Complex No. 2 named after Gen. J. Bem in Milanówek",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
  {
    date: "2023-2027",
    title: "University of Technology and Arts in Warsaw",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
];
const timelineData2: TimelineEntry[] = [
  {
    date: "2015-2017",
    title: "...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
  {
    date: "2020-2021",
    title: "...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
  {
    date: "2021-Now",
    title: "...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, mi sed blandit hendrerit, nisi nulla imperdiet odio, sit amet sagittis nisl erat sed dui. Pellentesque quis dolor ut tortor sagittis egestas at vulputate dolor. Sed congue ex pretium gravida tempor. Mauris eget blandit nulla, vitae accumsan lorem. Phasellus commodo, elit vitae pretium egestas, tellus neque vehicula leo, id pharetra risus tortor condimentum lectus. Aliquam erat volutpat. Fusce consequat lacus et aliquet facilisis. Fusce lectus nibh, euismod vel condimentum sed, pulvinar laoreet augue. Vivamus sit amet ullamcorper ante, ac dictum nulla. Maecenas ut ante faucibus, convallis massa eget, suscipit risus. Cras fringilla eu libero eu placerat. Nulla facilisi. Suspendisse maximus quam augue, vestibulum porta urna consequat quis. Nunc venenatis dui nulla, a ornare dolor pharetra in. Ut vitae libero condimentum sapien porta sagittis in a orci. Nullam viverra aliquet enim non mollis.",
  },
];

export default function AboutMePage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>About Me</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">
          {/* Lewa kolumna z tekstami */}
          <div className="flex-1 space-y-4 text-left h-64 w-full">
            <Card className="h-64">
              <CardHeader className="h-full flex flex-col justify-between">
                <CardDescription className="items-center flex h-full">
                  <div className="flex flex-col items-start space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      Polished game assets and systems for your next project
                    </h3>
                    <p>
                      Tiny Slime Studio is a solo developer crafting clean,
                      efficient game assets and systems for Unity. Whether you
                      need visuals or mechanics, each asset is designed with
                      performance and usability in mind — helping you build
                      better games, faster.
                    </p>
                    <div className="flex h-5 items-center space-x-2 text-sm">
                      <a
                        href="https://assetstore.unity.com/publishers/63085"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary flex items-center space-x-1"
                      >
                        <Icon
                          icon="solar:cart-4-bold-duotone"
                          className="size-4 mr-1"
                        />
                        <span>Asset Store</span>
                      </a>
                      <Separator orientation="vertical" />
                      <a
                        href="https://www.youtube.com/channel/UCnhLf9kMlT55ftMMKSu5Qwg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary flex items-center space-x-1"
                      >
                        <Icon
                          icon="solar:cart-4-bold-duotone"
                          className="size-4 mr-1"
                        />
                        <span>YouTube</span>
                      </a>
                      <Separator orientation="vertical" />
                      <a
                        href="https://www.youtube.com/channel/UCnhLf9kMlT55ftMMKSu5Qwg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary flex items-center space-x-1"
                      >
                        <Icon
                          icon="solar:cart-4-bold-duotone"
                          className="size-4 mr-1"
                        />
                        <span>Discord</span>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Prawa kolumna ze zdjęciem */}
          <div className="flex-shrink-0">
            <Card className="p-2">
              <CardContent className="p-0">
                <img
                  src="src/assets/img/portfolio_main.jpg"
                  alt="Moje zdjęcie"
                  className="h-96 xl:h-60 md:h-60 w-96 xl:w-60 md:w-60 object-cover rounded-xl shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="flex-1">
            <section className="py-4">
              <div className="container">
                <h1 className="text-foreground mb-10 text-center text-2xl font-bold tracking-tighter sm:text-5xl">
                  Education
                </h1>
                <div className="relative mx-auto max-w ml-30 mr-12">
                  <Separator
                    orientation="vertical"
                    className="bg-muted absolute left-2 top-4"
                  />
                  {timelineData.map((entry, index) => (
                    <div key={index} className="relative mb-10 pl-8">
                      <div className="bg-primary absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
                      <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-0 xl:px-3">
                        {entry.title}
                      </h4>

                      <h5 className="text-md -left-24 text-sm text-primary top-3 rounded-xl tracking-tight xl:absolute font-bold">
                        {entry.date}
                      </h5>

                      <Card className="my-0 border-none shadow-none">
                        <CardContent className="px-0 xl:px-2">
                          <div
                            className="text-xs text-muted-foreground prose dark:prose-invert text-foreground"
                            dangerouslySetInnerHTML={{ __html: entry.content }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Card>
          <Card className="flex-1">
            <section className="py-4">
              <div className="container">
                <h1 className="text-foreground mb-10 text-center text-2xl font-bold tracking-tighter sm:text-5xl">
                  Game Dev
                </h1>
                <div className="relative mx-auto max-w ml-30 mr-12">
                  <Separator
                    orientation="vertical"
                    className="bg-muted absolute left-2 top-4"
                  />
                  {timelineData2.map((entry, index) => (
                    <div key={index} className="relative mb-10 pl-8">
                      <div className="bg-primary absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
                      <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-0 xl:px-3">
                        {entry.title}
                      </h4>

                      <h5 className="text-md -left-24 text-sm text-primary top-3 rounded-xl tracking-tight xl:absolute font-bold">
                        {entry.date}
                      </h5>

                      <Card className="my-0 border-none shadow-none">
                        <CardContent className="px-0 xl:px-2">
                          <div
                            className="text-xs text-muted-foreground prose dark:prose-invert text-foreground"
                            dangerouslySetInnerHTML={{ __html: entry.content }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </SidebarInset>
  );
}
