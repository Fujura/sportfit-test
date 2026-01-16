import { Button } from "~/shared/components";
import { trackLead } from "~/shared/helpers";

export const MainSection = () => {
	return (
		<section className="mt-10 lg:mt-[230px] max-lg:h-[500px] flex flex-col max-lg:text-center max-lg:items-center relative">
			<h1 className="font-bold text-[26px] lg:text-[65px] max-w-[340px] lg:max-w-[850px] uppercase leading-[120%] lg:leading-[130%]">
				Новая программа тренировок на 30 дней
			</h1>
			<p className="text-[18px] max-lg:max-w-[256px] lg:text-[30px] py-2.5">
				Достигай результата без диет и стресса
			</p>
			<Button
				className="uppercase font-bold max-lg:absolute top-[110%] max-lg:text-[16px] lg:mt-10"
				onClick={trackLead}
			>
				Попробовать бесплатно
			</Button>
		</section>
	);
};
