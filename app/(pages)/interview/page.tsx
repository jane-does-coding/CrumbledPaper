import Interview from "@/app/components/Interview/Interview";

const InterviewPage = () => {
	return (
		<div>
			<img
				src="paper.png"
				className="fixed top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>
			<div className="z-5 relative">
				<Interview />
			</div>
		</div>
	);
};

export default InterviewPage;
