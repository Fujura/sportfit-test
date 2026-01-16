import { useState } from "react";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="flex items-center justify-between border-b border-[#747474] py-2.5 mt-2.5 relative">
			<img src="/images/logo.png" alt="sportfit logo" />

			<button
				onClick={toggleMenu}
				className="lg:hidden flex flex-col gap-1.5 p-2 z-20 cursor-pointer"
				aria-label="Toggle menu"
			>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${
						isMenuOpen ? "rotate-45 translate-y-2" : ""
					}`}
				/>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${
						isMenuOpen ? "opacity-0" : ""
					}`}
				/>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${
						isMenuOpen ? "-rotate-45 -translate-y-2" : ""
					}`}
				/>
			</button>

			<nav
				className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm z-10 transform transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col pt-20 px-6 gap-6">
					<a
						href="#"
						className="text-white text-lg hover:text-[#41B329] transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Главная
					</a>
					<a
						href="#"
						className="text-white text-lg hover:text-[#41B329] transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Программа
					</a>
					<a
						href="#"
						className="text-white text-lg hover:text-[#41B329] transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						О нас
					</a>
					<a
						href="#"
						className="text-white text-lg hover:text-[#41B329] transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Контакты
					</a>
				</div>
			</nav>

			{isMenuOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black/50 z-5"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
		</header>
	);
};
