import getCurrentUser from "@/app/actions/getCurrentUser";
import Sidebar from "@/app/components/Sidebar";

const NotificationsPage = async () => {
	const currentUser = await getCurrentUser();

	return (
		<div className="flex bg-neutral-100">
			<img
				src="paper.png"
				className="absolute top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>
			<div className="min-w-fit">
				<Sidebar currentUser={currentUser} />
			</div>
			<div className="z-5 w-full pt-[2vh] max-h-screen overflow-y-scroll pb-0">
				<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
					<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
						Notifications
					</h1>
				</div>
				<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[38.5vh] px-[2vw] drop-shadow-md mt-[2vh]">
					<h1 className="text-[5.5vh] leading-[5.5vh] text-center italic">
						Coming Soon
					</h1>
				</div>
			</div>
		</div>
	);
};

export default NotificationsPage;
