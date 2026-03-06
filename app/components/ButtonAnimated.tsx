import React from "react";

const Button = ({ text, link }: { text: string; link?: string }) => {
	return (
		<button
			className={`relative pr-[0.6vw] pb-[1.1vh] bg-red-500/0 group cursor-pointer`}
		>
			{/* shadow */}
			<span className="absolute inset-0 bg-black z-0 w-[96%] h-[87.5%] mt-auto ml-auto"></span>

			{/* button face */}
			<span className="relative bg-white border-2 border-black text-[5vh] wim px-[1.75vw] py-0 z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.55vh] transition-all ease-in-out">
				{text}
			</span>
		</button>
	);
};

export default Button;
