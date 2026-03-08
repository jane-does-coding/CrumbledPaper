import InterviewReciever from "@/app/components/Interview/InterviewReciever";

const InterviewPage = () => {
	return (
		<div>
			<img
				src="paper.png"
				className="fixed top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>
			<div className="z-5 relative">
				<InterviewReciever />
			</div>
		</div>
	);
};

export default InterviewPage;
