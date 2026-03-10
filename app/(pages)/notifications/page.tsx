import getCurrentUser from "@/app/actions/getCurrentUser";
import Notifications from "@/app/components/Notifications/Notifications";
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
			<div className="z-5 w-full pt-[2vh] max-h-screen overflow-y-scroll">
				<Notifications />
			</div>
		</div>
	);
};

export default NotificationsPage;
