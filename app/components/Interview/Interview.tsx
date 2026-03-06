"use client";
import React, { useState } from "react";

const Interview = () => {
	const [formData, setFormData] = useState({
		q1: "",
		q2: "",
		q3: "",
		q4: "",
		q5: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted:", formData);
	};

	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh] pb-[5vh]">
			{/* Header */}
			<div className="w-[65%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] mt-[2vh] drop-shadow-lg">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
					Exit Interview
				</h1>
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-[65%] mx-auto bg-white border-2 border-dotted flex flex-col drop-shadow-lg"
			>
				{[
					{ key: "q1", label: "What could we have done better?" },
					{ key: "q2", label: "What benefits did you value the most?" },
					{ key: "q3", label: "Would you recommend this company to a friend?" },
					{ key: "q4", label: "Any final comments or feedback?" },
					{
						key: "q5",
						label:
							"On a scale of 1-10, how supported did you feel by management?",
					},
				].map((question, i, arr) => (
					<div
						key={question.key}
						className={`py-[3vh] px-[2vw] ${
							i === arr.length - 1
								? ""
								: "border-b-2 border-dotted border-black"
						}`}
					>
						<label className="block text-[3vh] mb-[1.5vh]">
							{question.label}
						</label>

						<textarea
							name={question.key}
							value={(formData as any)[question.key]}
							onChange={handleChange}
							rows={4}
							className="w-full border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.5vh] outline-none resize-none"
							placeholder="Type your answer here..."
						/>
					</div>
				))}

				{/* Submit Section */}
				<div className="py-[3vh] px-[2vw] border-t-2 border-dotted border-black flex justify-center">
					<button
						type="submit"
						className="text-[3vh] border-2 border-dotted border-black px-[3vw] py-[1vh] hover:bg-black hover:text-white transition-all"
					>
						Submit Interview
					</button>
				</div>
			</form>
		</div>
	);
};

export default Interview;
