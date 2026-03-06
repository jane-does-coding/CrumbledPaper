import SendInterview from "@/app/components/SendInterview/SendInterview";
import Sidebar from "@/app/components/Sidebar";

const SendInterviewPage = () => {
	return (
		<div className="flex bg-neutral-100">
			<img
				src="paper.png"
				className="fixed top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="z-5 w-full pt-[2vh] max-h-screen overflow-y-scroll pb-[5vh]">
				<SendInterview />
			</div>
		</div>
	);
};

export default SendInterviewPage;
