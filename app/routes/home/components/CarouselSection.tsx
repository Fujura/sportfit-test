import { Carousel } from "~/shared/components";

const carouselImages = [
	"/images/carousel_1.png",
	"/images/carousel_2.png",
	"/images/carousel_3.png",
	"/images/carousel_4.png",
	"/images/carousel_5.png",
];

export const CarouselSection = () => {
	return (
		<section className="-mx-10 max-md:py-10 px-10 lg:-mx-[120px] lg:px-[120px] bg-[linear-gradient(180deg,rgba(15,8,10,0)_0%,#1E0F0D_28.96%,#432114_100%)] mt-[350px]">
			<h2 className="uppercase text-[26px] font-bold lg:text-[35px]">
				Программа
			</h2>
			<Carousel images={carouselImages} className="mt-6 lg:mt-14" />
		</section>
	);
};
