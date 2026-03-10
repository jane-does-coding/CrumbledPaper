"use client";
import React, { useState } from "react";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";

type FullInterview = Prisma.InterviewGetPayload<{
	include: { fields: true };
}>;

interface InterviewProps {
	interview?: FullInterview | null;
}

const InterviewAdmin = ({ interview }: InterviewProps) => {
	const router = useRouter();
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [loading, setLoading] = useState(false);

	if (!interview) return null;

	const handleDelete = async () => {
		try {
			setLoading(true);

			const res = await fetch(`/api/interview?id=${interview.id}`, {
				method: "DELETE",
			});

			if (!res.ok) {
				throw new Error("Delete failed");
			}

			router.refresh();
			router.push("/dashboard"); // redirect wherever your list page is
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
			setShowDeleteModal(false);
		}
	};

	return (
		<>
			<div className="flex flex-col w-full items-center justify-center gap-[2vh] py-[2vh] ">
				{/* Header */}
				<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] flex items-center justify-between">
					<h1 className="text-[5.5vh] leading-[5.5vh]">Interview Submission</h1>

					<button
						onClick={() => setShowDeleteModal(true)}
						className="text-[2.5vh] border-2 border-dotted border-black px-[1.5vw] py-[0.5vh] hover:bg-black hover:border-neutral-300 duration-300 font-extrabold hover:text-white cursor-pointer transition-all"
					>
						Delete
					</button>
				</div>

				{/* Receiver Info */}
				<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
					<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
						<h2 className="text-[4vh]">Receiver</h2>
					</div>

					<div className="flex flex-col gap-[1.5vh] py-[2vh] px-[2vw] text-[2.5vh]">
						<p>Name: {interview.receiverName}</p>
						<p>Email: {interview.receiverEmail}</p>
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
								{interview.isCompleted ? "Completed" : "Not completed yet"}
							</p>
						</div>
					</div>
				</div>

				{/* Responses */}
				<div className="w-[95%] mx-auto bg-white border-2 border-dotted">
					<div className="border-b-2 border-dotted border-black py-[2vh] px-[2vw]">
						<h2 className="text-[4vh]">Responses</h2>
					</div>

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

			{/* DELETE MODAL */}
			{showDeleteModal && (
				<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
					<div className="bg-white border-2 border-dotted border-black p-[3vh] w-[30vw] flex flex-col gap-[2vh]">
						<h2 className="text-[3.5vh] font-bold">Delete Interview?</h2>

						<p className="text-[2.3vh]">
							Are you sure you want to delete this interview submission? This
							action cannot be undone.
						</p>

						<div className="flex justify-end gap-[1vw]">
							<button
								onClick={() => setShowDeleteModal(false)}
								className="border-2 border-dotted border-black px-[1.5vw] py-[0.5vh] text-[2vh] hover:bg-neutral-200 transition"
							>
								Cancel
							</button>

							<button
								onClick={handleDelete}
								disabled={loading}
								className="border-2 border-dotted border-black px-[1.5vw] py-[0.5vh] text-[2vh] bg-black text-white hover:opacity-80 transition"
							>
								{loading ? "Deleting..." : "Delete"}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default InterviewAdmin;
