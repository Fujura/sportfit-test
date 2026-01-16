import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Button } from "../button";

interface CarouselProps {
	images: string[];
	className?: string;
}

export const Carousel = ({ images, className }: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselContainerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const getTransform = () => {
		if (isMobile) {
			return `translateX(calc(-${currentIndex} * (100% + 1rem)))`;
		}
		return `translateX(calc(-${currentIndex} * (calc((100% - 2rem) / 3) + 1rem)))`;
	};

	return (
		<div className={clsx("relative", className)}>
			<div className="relative flex items-center gap-4">
				<Button
					onClick={goToPrevious}
					className="hidden md:flex !w-12 h-12 !rounded-full !p-0 items-center justify-center z-10 shrink-0"
					aria-label="Previous image"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.5 9L4.5 6L7.5 3"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Button>

				<div className="flex-1 overflow-hidden">
					<div
						ref={carouselContainerRef}
						className="flex gap-4 transition-transform duration-500 ease-in-out"
						style={{
							transform: getTransform(),
						}}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className="shrink-0 w-full md:w-[calc((100%-2rem)/3)]"
							>
								<div className="overflow-hidden rounded-lg md:border-0">
									<img
										src={image}
										alt={`Carousel image ${index + 1}`}
										className="w-full h-auto object-cover rounded-lg"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<Button
					onClick={goToNext}
					className="hidden md:flex !w-12 h-12 !rounded-full !p-0 items-center justify-center z-10 shrink-0"
					aria-label="Next image"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.5 3L7.5 6L4.5 9"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Button>
			</div>

			<div className="flex justify-center gap-2 mt-6 md:hidden">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full transition-colors ${
							index === currentIndex ? "bg-[#41B329]" : "bg-white"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};
