
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function MeetAndTalk() {
	return (
		<div>
			<p className="text-xs text-muted-foreground">
				✋Welcome in Meet and Talk<br></br>
				<br></br>Meet and Talk is a powerful and intuitive graphical
				dialogue editor designed to help developers create complex and
				interactive dialogues with ease. Whether you are working on an
				RPG, adventure game, or a narrative-driven experience, this
				system provides the tools necessary to craft dynamic
				conversations that respond to player choices and shape the
				course of the story.<br></br>
				<br></br>The Global Event System enhances the dialogue framework
				by enabling scene modifications, inventory management, shop
				creation, and many other interactive gameplay elements. This
				system provides extensive flexibility, allowing seamless
				integration of dialogues with game mechanics to create truly
				engaging experiences.
			</p>
			<h4 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
				Asset Content
			</h4>
...
			<h4 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
				Integrations
			</h4>
			<div className="flex flex-col xl:flex-row gap-4">
				<Card className="py-0 w-full  ">
					<CardHeader className="px-0">
						<CardTitle>
							<img
								src="../src/assets/projects/HB/Header.png"
								alt="Moje zdjęcie"
								className="object-cover rounded-xl shadow-lg w-full h-full"
							/>
							<div className="mt-4 px-4">
								Meet and Talk - Dialogue System
							</div>
						</CardTitle>
						<CardDescription className="text-xs text-muted-foreground px-4 pb-4">
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
				<Card className="py-0 w-full  ">
					<CardHeader className="px-0">
						<CardTitle>
              <AspectRatio ratio={16 / 9} >
							<img
								src="https://assetstorev1-prd-cdn.unity3d.com/key-image/35424482-1bf2-4775-a8a9-0c89d6321fe8.jpg"
								alt="Moje zdjęcie"
								className="object-cover rounded-xl shadow-lg w-full h-full"
							/>
              </AspectRatio>
							<div className="mt-4 px-4">
								UHFPS - Ultimate Horror FPS KIT
							</div>
						</CardTitle>
						<CardDescription className="text-xs text-muted-foreground px-4 pb-4">
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
