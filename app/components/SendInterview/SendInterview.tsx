"use client";

const SendInterview = () => {
	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh]">
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
					Interview Form
				</h1>
			</div>
			<div className="flex gap-[2vh] w-[95%]">
				<div className="w-full mx-auto bg-white border-2 border-dotted py-[3vh] px-0 drop-shadow-md">
					<h1 className="text-[3.5vh] leading-[3.5vh] text-center mb-[3vh]">
						Interview
					</h1>

					{/* Default Questions */}
					<div className="flex flex-col">
						<input
							type="text"
							placeholder="Reciever Name"
							className="w-full border-t-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
						/>
						<input
							type="text"
							placeholder="Reciever Email"
							className="w-full border-t-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
						/>
						<input
							type="text"
							placeholder="Additional Comments"
							className="w-full border-y-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
						/>
					</div>

					<h1 className="text-[3.5vh] leading-[3.5vh] text-center mt-[4vh]">
						Add Input +
					</h1>

					{/* Options */}
					<div className="grid grid-cols-3 w-[95%] mx-auto gap-[1vh] mt-[2.5vh]">
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Text
						</button>
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Number
						</button>
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Radio
						</button>
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Select
						</button>
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Textarea
						</button>
						<button className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh]">
							Checkbox
						</button>
					</div>
				</div>
				<div className="w-full mx-auto bg-white border-2 border-dotted py-[3vh] px-[2vw] drop-shadow-md">
					<h1 className="text-[3.5vh] leading-[3.5vh] text-center mb-[2vh]">
						Preview
					</h1>
					<p className="text-[3vh]">
						Dear, {"[RECIEVER NAME]"}, thank you so much for your time at our
						company, so please fill out this form on your experience and
						feedback.
					</p>

					<div className="flex flex-col mt-[3vh]">
						<div className="flex flex-col">
							<h3 className="text-[3vh] mb-[1vh]">
								What could be done better?
							</h3>
							<input
								type="text"
								placeholder="Additional Comments"
								className="w-full border-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SendInterview;
