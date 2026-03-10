import React from "react";

const Notifications = () => {
	return (
		<div className="z-5 w-full max-h-screen">
			<div className="w-full h-screen bg-neutral-300/30 fixed z-2 top-0 left-0 backdrop-blur-[3px] flex items-center justify-center">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center italic">
					Coming Soon
				</h1>
			</div>
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
					Notifications
				</h1>
			</div>
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted pt-[2vh] drop-shadow-md mt-[2vh]">
				{/* <h1 className="text-[5.5vh] leading-[5.5vh] text-center italic">
					Coming Soon
				</h1> */}
				<h3 className="text-left text-[4vh] border-b-2 border-black border-dotted px-[2vw] pb-[2vh]">
					Unread Notification
				</h3>
				<div className="flex flex-col items-center justify-center">
					{[1, 2, 3].map((item, i) => (
						<a
							href={`/interview/`}
							className={`w-full flex py-[1.25vh] px-[2vw] items-center justify-between border-dotted border-black ${
								i === 2 ? "border-b-none" : "border-b-2"
							}`}
						>
							{" "}
							<h2 className="text-[3vh] flex items-center justify-center gap-[0.75vw] text-neutral-500 font-extralight">
								<span className="font-extrabold text-black text-[3.25vh]">
									John Doe
								</span>{" "}
								completed their interview
							</h2>
							<div className="flex gap-[3vw]">
								<p className="text-[2.25vh]">03/10/26</p>
								<p className="text-[2.25vh]">12:38pm</p>
								<div className="flex items-center justify-center gap-[0.5vw]">
									<p className="text-[3.5vh] leading-[2vh] font-extralight">
										{">"}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted pt-[2vh] drop-shadow-md mt-[2vh]">
				{/* <h1 className="text-[5.5vh] leading-[5.5vh] text-center italic">
					Coming Soon
				</h1> */}
				<h3 className="text-left text-[4vh] border-b-2 border-black border-dotted px-[2vw] pb-[2vh]">
					Read Notification
				</h3>
				<div className="flex flex-col items-center justify-center opacity-50">
					{[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
						<a
							href={`/interview/`}
							className={`w-full flex py-[1.25vh] px-[2vw] items-center justify-between border-dotted border-black ${
								i === 6 ? "border-b-none" : "border-b-2"
							}`}
						>
							{" "}
							<h2 className="text-[3vh] flex items-center justify-center gap-[0.75vw] text-neutral-500 font-extralight">
								<span className="font-extrabold text-black text-[3.25vh]">
									John Doe
								</span>{" "}
								completed their interview
							</h2>
							<div className="flex gap-[3vw]">
								<p className="text-[2.25vh]">03/10/26</p>
								<p className="text-[2.25vh]">12:38pm</p>
								<div className="flex items-center justify-center gap-[0.5vw]">
									<p className="text-[3.5vh] leading-[2vh] font-extralight">
										{">"}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="py-[2vh]"></div>
		</div>
	);
};

export default Notifications;
