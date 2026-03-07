const Video = () => {
	return (
		<div>
			<div className="w-screen mx-auto min-h-[90vh]">
				<div className="bg-green-300/0 pt-[10vh] pb-[10vh] relative">
					<img
						src="paper.png"
						className="absolute top-0 left-0 z-0 w-full h-full opacity-40 object-cover"
						alt=""
					/>
					<h1 className="handone leading-[10vh] text-right text-[10vh] mr-[10vw]">
						Great employee left <br /> and you don't know why?
					</h1>
					<p className="handone leading-[5vh] text-neutral-700 text-left text-[5vh] font-extralight w-[70vw] ml-[10vw] mt-[2vh]">
						Their name isn't just a crumbled paper, but a story of{" "}
						<span className="font-bold text-black italic underline">
							their experience
						</span>{" "}
						working in{" "}
						<span className="font-bold text-black italic underline">
							{" "}
							your company
						</span>
						. We help you unfold that story and find out the reason behind their
						departure.
					</p>
				</div>
				<div className="w-full border-y-2 border-black border-dotted">
					<div className="bg-neutral-400 aspect-5/3 w-[50vw] mx-auto"></div>
				</div>
				<div className="border-b-2 border-dotted border-black flex">
					<div className="w-1/3 h-[25vh] border-r-2 hover:w-[50%] transition-all ease-in-out duration-300 border-black border-dotted flex items-center justify-center">
						<h2 className="text-[4vh] font-extralight text-center px-[2vw] transition-all ease-in-out duration-300">
							1. Create a personalized survey for your employee
						</h2>
					</div>
					<div className="w-1/3 h-[25vh] border-r-2 hover:w-[50%] transition-all ease-in-out duration-300 border-black border-dotted flex items-center justify-center">
						<h2 className="text-[4vh] font-extralight text-center px-[2vw] transition-all ease-in-out duration-300">
							2. Collect structured insights and responses
						</h2>
					</div>
					<div className="w-1/3 h-[25vh]  flex hover:w-[50%] transition-all ease-in-out duration-300 items-center justify-center">
						<h2 className="text-[4vh] font-extralight text-center px-[2vw] transition-all ease-in-out duration-300">
							3. Analyze trends with intelligent AI reporting
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
