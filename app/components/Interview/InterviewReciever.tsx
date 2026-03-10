"use client";
import React, { useState } from "react";
import { Prisma } from "@prisma/client";

type FullInterview = Prisma.InterviewGetPayload<{
	include: { fields: true };
}>;

interface InterviewProps {
	interview?: FullInterview | null;
}

const InterviewReciever = ({ interview }: InterviewProps) => {
	if (!interview) return <div>Hello</div>;

	const [formData, setFormData] = useState<Record<string, string>>({});
	const [completed, setCompleted] = useState(interview.isCompleted);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]:
				type === "checkbox"
					? (e.target as HTMLInputElement).checked
						? "checked"
						: ""
					: value,
		}));
	};

	/* const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted:", formData);
	}; */

	const handleSubmit = async () => {
		await fetch(`/api/interviews/${interview.id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		setCompleted(true);
	};

	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh] pb-[5vh]">
			{completed ? (
				<>
					<div className="w-[65%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] mt-[2vh] drop-shadow-lg">
						<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
							Exit Interview
						</h1>
					</div>
					<div className="w-[65%] mx-auto bg-white border-2 border-dotted py-[5vh] px-[2vw] mt-[2vh] drop-shadow-lg">
						<h2 className="text-[4vh] leading-[3vh] text-center">
							Thank you for completing the interview!
						</h2>
						<p className="text-[2.5vh] mt-[3vh] text-center">
							Your responses have been recorded.
						</p>
					</div>
				</>
			) : (
				<>
					{/* Header */}
					<div className="w-[65%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] mt-[2vh] drop-shadow-lg">
						<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
							Exit Interview
						</h1>
					</div>

					{/* The Form */}
					<form
						onSubmit={handleSubmit}
						className="w-[65%] mx-auto bg-white border-2 border-dotted flex flex-col drop-shadow-lg"
					>
						{interview?.fields.map((field, i) => (
							<div
								key={field.id}
								className={`py-[3vh] px-[2vw] ${
									i !== interview.fields.length - 1
										? "border-b-2 border-dotted border-black"
										: ""
								}`}
							>
								<label className="block text-[3vh] mb-[1.5vh]">
									{field.label}
								</label>

								{field.type === "text" && (
									<input
										type="text"
										name={field.id}
										value={formData[field.id] || ""}
										onChange={handleChange}
										placeholder={field.placeholder}
										className="w-full border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.5vh] outline-none"
									/>
								)}

								{field.type === "number" && (
									<input
										type="number"
										name={field.id}
										value={formData[field.id] || ""}
										onChange={handleChange}
										placeholder={field.placeholder}
										className="w-full border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.5vh] outline-none"
									/>
								)}

								{field.type === "textarea" && (
									<textarea
										name={field.id}
										value={formData[field.id] || ""}
										onChange={handleChange}
										placeholder={field.placeholder}
										rows={4}
										className="w-full border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.5vh] outline-none resize-none"
									/>
								)}

								{field.type === "checkbox" && (
									<label className="flex items-center gap-[1vw] text-[2.5vh]">
										<input
											type="checkbox"
											name={field.id}
											checked={formData[field.id] === "checked"}
											onChange={handleChange}
										/>
										{field.placeholder || "Check this option"}
									</label>
								)}

								{/* {field.type === "select" && field.options && (
							<select
								name={field.id}
								value={formData[field.id] || ""}
								onChange={handleChange}
								className="w-full border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.5vh] outline-none"
							>
								<option value="">Select...</option>
								{field.options.map((opt, i) => (
									<option key={i} value={opt}>
										{opt}
									</option>
								))}
							</select>
						)}

						{field.type === "radio" && field.options && (
							<div className="flex flex-col gap-[0.5vh]">
								{field.options.map((opt, i) => (
									<label key={i} className="flex gap-[1vw] text-[2.5vh]">
										<input
											type="radio"
											name={field.id}
											value={opt}
											checked={formData[field.id] === opt}
											onChange={handleChange}
										/>
										{opt}
									</label>
								))}
							</div>
						)} */}
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
				</>
			)}
		</div>
	);
};

export default InterviewReciever;
