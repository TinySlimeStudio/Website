import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/menu-toogle";
import { Button } from "@/components/ui/button";

import ProjectTemplate from "@/app/projects/ProjectPage";
import HBData from "@/app/projects/HellishBattle/HB.json";
import MATFreeData from "@/app/projects/MeetAndTalkFree/MAT_F.json";
import MATProData from "@/app/projects/MeetAndTalkPro/MAT_P.json";
import LTData from "@/app/projects/LootTable/LT.json";
import DTLData from "@/app/projects/DrawTheLine/DTL.json";

import MeetAndTalk from "@/app/projects/MeetAndTalkPro/MeetAndTalk";

import AboutMePage from "@/app/AboutMe";
import Projects from "@/app/Projects";
import ContactPage from "@/app/Contact";
import ComingSoon from "@/app/ComingSoon";

import Error404 from "@/app/404";
import { Badge } from "./components/ui/badge";
import { Card, CardContent } from "./components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

function Home() {
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
									<BreadcrumbPage>Welcome</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						<div>
							<ModeToggle />
						</div>
					</div>
				</div>
			</header>

			<section className="pt-4 px-8">
				<div className="container">
					<div className="grid items-center gap-8 lg:grid-cols-2">
						<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
							<Badge variant="outline">
								Young Game Developer
							</Badge>
							<h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
								Tiny Slime Studio
							</h1>
							<p className="text-muted-foreground mb-8 max-w-xl  lg:text-sm">
								Tiny Slime Studio is a solo developer crafting
								clean, efficient game assets and systems for
								Unity. Whether you need visuals or mechanics,
								each asset is designed with performance and
								usability in mind — helping you build better
								games, faster
							</p>
							<div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
								<Button asChild className="w-full sm:w-auto">
									<a href="#">
										<Icon icon="solar:cart-4-bold-duotone"></Icon>
										Asset Store
									</a>
								</Button>
								<Button
									asChild
									variant="outline"
									className="w-full sm:w-auto"
								>
									<a href="#">
										<Icon icon="ic:sharp-discord"></Icon>
										Discord
									</a>
								</Button>
							</div>
						</div>
						<img
							src="../src/assets/img/banner.jpg"
							alt="Hero section demo image showing interface components"
							className="max-h-96 w-full rounded-md object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="pt-8 px-8">
				<div className="pb-8">
					<div className="flex flex-col gap-6">
						<div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
							<img
								src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
								alt="placeholder"
								className="h-72 w-full rounded-md object-cover lg:h-auto"
							/>
							<Card className="col-span-2 flex items-center justify-center p-6">
								<div className="flex flex-col gap-4">
									<q className="text-xl font-medium lg:text-3xl">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Atque eveniet suscipit
										corporis sequi usdam alias fugiat iusto
										perspiciatis.
									</q>
								</div>
							</Card>
						</div>
						<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
							<Card>
								<CardContent className="px-6 pt-6 leading-7 text-foreground/70">
									<q>
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Ipsa, eveniet
										inventore! Omnis incidunt vel iste.
									</q>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="px-6 pt-6 leading-7 text-foreground/70">
									<q>
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Ipsa, eveniet
										inventore! Omnis incidunt vel iste.
									</q>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="px-6 pt-6 leading-7 text-foreground/70">
									<q>
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Ipsa, eveniet
										inventore! Omnis incidunt vel iste.
									</q>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</SidebarInset>
	);
}

function App() {
	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<SidebarProvider>
					<AppSidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about-me" element={<AboutMePage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/projects" element={<Projects />} />
						<Route
							path="/projects/hellish-battle"
							element={<ProjectTemplate data={HBData} />}
						/>
						<Route
							path="/projects/meet-and-talk-free"
							element={<ProjectTemplate data={MATFreeData} />}
						/>
						<Route
							path="/projects/meet-and-talk-pro"
							element={
								<ProjectTemplate
									data={MATProData}
									children={<MeetAndTalk />}
								/>
							}
						/>
						<Route
							path="/projects/loot-table"
							element={<ProjectTemplate data={LTData} />}
						/>
						<Route
							path="/projects/draw-the-line"
							element={<ProjectTemplate data={DTLData} />}
						/>
						<Route
							path="/projects/climate-manager-pro"
							element={<ComingSoon />}
						/>
						<Route
							path="/projects/avatar-creator"
							element={<ComingSoon />}
						/>
						<Route path="*" element={<Error404 />} />
					</Routes>
				</SidebarProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
