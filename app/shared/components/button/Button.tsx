import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export const Button = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={clsx(
				className,
				"rounded-[30px] w-fit py-5 px-12 text-[22px] cursor-pointer bg-[#41B329] shadow-[inset_0px_2px_8.3px_4px_#166605] active:bg-[#29721a] transition-all duration-150"
			)}
			{...props}
		>
			{children}
		</button>
	);
};
