"use client";
import React from "react";

const InterviewAdmin = () => {
	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh]">
			{/* Header */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] flex items-center justify-between">
				<h1 className="text-[5.5vh] leading-[5.5vh]">Interview Submission</h1>
				<button className="text-[2.5vh] border-2 border-dotted border-black px-[1.5vw] py-[0.5vh] hover:bg-black hover:border-neutral-300 duration-300 font-extrabold hover:text-white cursor-pointer transition-all">
					Delete
				</button>
			</div>

			{/* Receiver Info */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
				<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
					<h2 className="text-[4vh]">Receiver</h2>
				</div>

				<div className="flex flex-col gap-[1.5vh] py-[2vh] px-[2vw] text-[2.5vh]">
					<p>Name: Bob Smith</p>
					<p>Email: bob.smith@example.com</p>
				</div>
			</div>

			{/* Submission Info */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
				<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
					<h2 className="text-[4vh]">Submission</h2>
				</div>

				<div className="flex flex-col gap-[1.5vh] py-[2vh] px-[2vw] text-[2.5vh]">
					<p>Submitted on: August 26, 2025 at 4:40 PM</p>

					<div className="flex items-center gap-[1vw]">
						<div className="w-[1.75vw] h-[1.75vw] border-2 border-dotted border-black rounded-full"></div>
						<p>Status: Not completed yet</p>
					</div>
				</div>
			</div>

			{/* Responses */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
				<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
					<h2 className="text-[4vh]">Responses</h2>
				</div>

				{/* Question Block */}
				{[
					"What could we have done better?",
					"What benefits did you value the most?",
					"Would you recommend this company to a friend?",
					"Any final comments or feedback?",
					"On a scale of 1-10, how supported did you feel by management?",
				].map((question, i, arr) => (
					<div
						key={i}
						className={`py-[2vh] px-[2vw] ${
							i === arr.length - 1
								? ""
								: "border-b-2 border-dotted border-black"
						}`}
					>
						<h3 className="text-[3vh] mb-[1vh]">{question}</h3>
						<p className="text-[2.5vh] opacity-60">No answer</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InterviewAdmin;
