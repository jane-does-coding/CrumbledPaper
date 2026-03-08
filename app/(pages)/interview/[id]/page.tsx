import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getInterviewById from "@/app/actions/getInterviewById";
import Sidebar from "@/app/components/Sidebar";
import InterviewAdmin from "@/app/components/InterviewAdmin/InterviewAdmin";
import InterviewReciever from "@/app/components/Interview/InterviewReciever";

const Page = async ({ params }: { params: { id: string } }) => {
	const currentUser = await getCurrentUser();
	const interviewId = params.id;
	const interview = await getInterviewById(interviewId);
	console.log("interview", interview);

	if (!interview) return;

	return (
		<div className="flex bg-neutral-100 min-h-screen">
			<img
				src="/paper.png"
				className="absolute top-0 left-0 z-0 w-full h-screen opacity-40"
				alt="paper"
			/>
			{currentUser ? (
				<>
					<div className="min-w-fit">
						<Sidebar currentUser={currentUser} />
					</div>
					<div className="w-full h-screen overflow-y-scroll pb-[5vh] relative">
						<InterviewAdmin interview={interview} />
					</div>
				</>
			) : (
				<InterviewReciever interview={interview} />
			)}
		</div>
	);
};

export default Page;
