"use client";
import React from "react";
import { Prisma } from "@prisma/client";

type FullInterview = Prisma.InterviewGetPayload<{
	include: { fields: true };
}>;

interface InterviewProps {
	interview?: FullInterview | null;
}

const InterviewAdmin = ({ interview }: InterviewProps) => {
	if (!interview) return;

	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh] py-[2vh] ">
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
					<p>Name: {interview?.receiverName}</p>
					<p>Email: {interview?.receiverEmail}</p>
				</div>
			</div>

			{/* Submission Info */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
				<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
					<h2 className="text-[4vh]">Submission</h2>
				</div>

				<div className="flex flex-col gap-[1.5vh] py-[2vh] px-[2vw] text-[2.5vh]">
					<p>
						Created on:{" "}
						{new Date(interview.createdAt).toLocaleDateString("en-US", {
							weekday: "long",
							month: "long",
							day: "numeric",
							year: "numeric",
						})}
					</p>

					<div className="flex items-center gap-[1vw]">
						<div className="w-[1.75vw] h-[1.75vw] border-2 border-dotted border-black rounded-full"></div>
						<p>
							Status:{" "}
							{interview?.isCompleted ? "Completed" : "Not completed yet"}
						</p>
					</div>
				</div>
			</div>

			{/* Responses */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
				<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
					<h2 className="text-[4vh]">Responses</h2>
				</div>

				{/* Question Block */}
				{/* Question Block */}
				{interview.fields.map((field, i, arr) => (
					<div
						key={field.id}
						className={`py-[2vh] px-[2vw] ${
							i === arr.length - 1
								? ""
								: "border-b-2 border-dotted border-black"
						}`}
					>
						<h3 className="text-[3vh] mb-[1vh]">{field.label}</h3>

						<p className="text-[2.5vh] opacity-60">
							{field.receiverInput ?? "No answer"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InterviewAdmin;
