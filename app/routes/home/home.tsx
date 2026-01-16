import { Button, Carousel } from "~/shared/components";
import type { Route } from "./+types/home";
import { CarouselSection } from "./components/CarouselSection";
import { MainSection } from "./components/MainSection";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sportfit" },
		{ name: "description", content: "Welcome to Sportfit landing page!" },
	];
}

export default function Home() {
	return (
		<main className="-mx-10 px-10 lg:px-[120px] lg:-mx-[120px] bg-[url(/images/background_mobile.png)] lg:bg-[url(/images/background_desktop.png)] bg-no-repeat bg-cover flex justify-center flex-col bg-position-[center_-200px] lg:bg-position-[center_-90px]">
			<MainSection />
			<CarouselSection />
		</main>
	);
}
