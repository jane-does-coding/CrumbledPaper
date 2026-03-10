import Button from "../ButtonAnimated";
import Image from "next/image";

const Landing = () => {
	return (
		<div>
			<img
				src="paper.png"
				className="absolute top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>
			<div className="h-screen w-full items-center justify-end flex flex-col z-5 relative">
				<Image
					src="/logo.png"
					alt="Logo"
					width={200}
					height={200}
					className="animate-slow-spin w-[5vw] fixed top-[3vh] left-[2vw] transition-all ease-in-out hover:scale-120 duration-300 cursor-pointer bg-white rounded-full p-[1vh] z-99 border-[0.5px] border-black"
				/>
				<h1 className="text-[16vh] leading-[16vh] font-extralight relative">
					Crumbled Paper
					<span className="absolute bottom-[-5vh] right-[-3.5vw] text-[5vh] rotate-[-10deg]">
						{"(AI)"}
					</span>
				</h1>
				<h1 className="text-[5vh] font-extralight mt-0">
					A worker isn't just a crumbled and tossed away paper....
				</h1>
				{/* Top part */}
				<div className="border-y-2 border-black border-dotted w-full flex items-center justify-center mt-[3vh] bg-neutral-100">
					<div className="w-1/3 h-[10vh] border-r-2 hover:w-[50%] transition-all ease-in-out duration-400 border-black border-dotted flex items-center justify-center">
						<h2 className="text-[4vh] font-extralight">Hired with Hope</h2>
					</div>
					<div className="w-1/3 h-[10vh] border-r-2 hover:w-[50%] transition-all ease-in-out duration-400 border-black border-dotted flex items-center justify-center">
						<h2 className="text-[4vh] font-extralight">Left with Silence</h2>
					</div>
					<div className="w-1/3 h-[10vh]  flex hover:w-[50%] transition-all ease-in-out duration-400 items-center justify-center">
						<h2 className="text-[4vh] font-extralight">We bring Answers</h2>
					</div>
				</div>
				{/* Middle Section */}
				<div className="border-b-2 border-black border-dotted w-full flex items-center justify-center mt-0 h-[60vh]">
					<div className="w-2/3 h-full border-r-2 transition-all ease-in-out duration-300 border-black border-dotted flex items-center justify-center relative">
						<div className="bg-neutral-400 h-full ml-auto z-5 w-full"></div>
					</div>
					<div className="w-1/3 h-full border-r-2 px-[2vw] transition-all ease-in-out duration-300 border-black border-dotted flex flex-col items-center justify-center">
						<p className="text-[5vh] text-neutral-700 mb-[2vh]">
							Crumbled Paper AI gives you the power to see the other side of the
							story and know the real reason behind your employee's departure.
						</p>
						<a href="/login">
							<Button text="Join Early Access" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
