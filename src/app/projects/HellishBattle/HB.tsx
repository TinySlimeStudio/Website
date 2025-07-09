
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function HellishBattle() {
	return (
		<div>
			<p className="text-xs text-muted-foreground">
				Hellish Battle is a renewed version of the Game with the same
				title created by a 13-year-old boy who was just starting his
				adventure with programming and after 5 years he decided to renew
				his idea.
			</p>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							Version 3.0 "Revamp Update" is Coming!
						</h4>
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<ul className="ml-6 list-disc [&>li]:mt-1">
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
							<li>XXX</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<img
				src="../src/assets/img/hb.png"
				alt="Moje zdjęcie"
				className="object-cover rounded-xl shadow-lg w-full h-full"
			/>
			<h4 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
				Asset Content
			</h4>
			...
			<h4 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
				Integrations
			</h4>
			<div className="flex flex-col xl:flex-row gap-4">
				<Card className="py-4 w-full  ">
					<CardHeader>
						<CardTitle>
							<img
								src="../src/assets/img/hb.png"
								alt="Moje zdjęcie"
								className="object-cover rounded-xl shadow-lg w-full h-full"
							/>
							<div className="mt-4">
								Meet and Talk - Dialogue System
							</div>
						</CardTitle>
						<CardDescription className="text-xs text-muted-foreground">
							Meet and Talk is a dialogue system for creating
							simple or complex conversations with ease. It
							supports advanced nodes, localization, UI
							customization, and seamless integration to enhance
							storytelling.
							<div className="flex flex-wrap gap-2 mt-2">
								<Button
									variant="secondary"
									className="gap-1 text-xs flex-1 min-w-[120px]"
									onClick={() =>
										window.open(
											"https://example.com/urp-version",
											"_blank"
										)
									}
								>
									<Icon icon="solar:cart-large-2-bold-duotone" />
									Pro Version
								</Button>
								<Button
									variant="outline"
									className="gap-1 text-xs flex-1 min-w-[120px]"
									onClick={() =>
										window.open(
											"https://example.com/hrrp-version",
											"_blank"
										)
									}
								>
									<Icon icon="solar:cart-large-2-bold-duotone" />
									Free Version
								</Button>
							</div>
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className="py-4 w-full  ">
					<CardHeader>
						<CardTitle>
							<img
								src="../src/assets/img/hb.png"
								alt="Moje zdjęcie"
								className="object-cover rounded-xl shadow-lg w-full h-full"
							/>
							<div className="mt-4">
								UHFPS - Ultimate Horror FPS KIT
							</div>
						</CardTitle>
						<CardDescription className="text-xs text-muted-foreground">
							UHFPS offers an extensive collection of assets,
							tools, and pre-built systems, allowing you to jump
							straight into developing your unique horror
							masterpiece.
							<div className="flex flex-wrap gap-2 mt-2">
								<Button
									variant="secondary"
									className="gap-1 text-xs flex-1 min-w-[120px]"
									onClick={() =>
										window.open(
											"https://example.com/urp-version",
											"_blank"
										)
									}
								>
									<Icon icon="solar:cart-large-2-bold-duotone" />
									URP Version
								</Button>
								<Button
									variant="outline"
									className="gap-1 text-xs flex-1 min-w-[120px]"
									onClick={() =>
										window.open(
											"https://example.com/hrrp-version",
											"_blank"
										)
									}
								>
									<Icon icon="solar:cart-large-2-bold-duotone" />
									HDRP Version
								</Button>
							</div>
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
