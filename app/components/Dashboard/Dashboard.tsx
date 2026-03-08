"use client";
import { useState, useMemo } from "react";
import { Prisma } from "@prisma/client";

type InterviewWithFields = Prisma.InterviewGetPayload<{
	include: { fields: true };
}>;

interface DashboardProps {
	interviews?: InterviewWithFields[] | null;
}

const Dashboard = ({ interviews }: DashboardProps) => {
	const [search, setSearch] = useState("");
	const [sortOrder, setSortOrder] = useState("desc");

	if (!interviews) {
		return <div>No Interviews</div>;
	}

	const filteredAndSorted = useMemo(() => {
		let filtered = interviews.filter((interview) =>
			interview.receiverName.toLowerCase().includes(search.toLowerCase())
		);

		filtered.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();

			return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
		});

		return filtered;
	}, [search, sortOrder]);

	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh]">
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">Interviews</h1>
			</div>

			{/* Filters */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-0 px-[1vw] flex items-center justify-between gap-[2vw] drop-shadow-md">
				<input
					type="text"
					placeholder="Search by name..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full border-r-2 border-dotted border-black px-[1vw] py-[1.5vh] text-[3vh] outline-none"
				/>

				<select
					value={sortOrder}
					onChange={(e) => setSortOrder(e.target.value)}
					className="border-none border-black px-[1vw] py-[0.5vh] text-[2.5vh] outline-none mr-[2vw]"
				>
					<option value="desc">Date: Newest → Oldest</option>
					<option value="asc">Date: Oldest → Newest</option>
				</select>
			</div>

			{/* Interview List */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted drop-shadow-md">
				{filteredAndSorted.map((item, i) => (
					<a
						href={`/interview/${item.id}`}
						key={item.id}
						className={`w-full flex py-[1.25vh] px-[2vw] items-center justify-between border-dotted border-black ${
							i === filteredAndSorted.length - 1
								? "border-b-none"
								: "border-b-2"
						}`}
					>
						<h2 className="text-[3.5vh]">{item.receiverName}</h2>
						<div className="flex gap-[3vw]">
							<p className="text-[2.5vh]">{item.fields.length} Questions</p>
							<p className="text-[2.5vh]">
								{new Date(item.createdAt).toLocaleDateString()}
							</p>
							<div className="flex items-center justify-center gap-[0.5vw]">
								<div className="w-[1.75vw] h-[1.75vw] border-2 border-dotted border-black rounded-full"></div>
								<p className="text-[2.5vh]">
									{item.isCompleted ? "Completed" : "Pending"}
								</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
