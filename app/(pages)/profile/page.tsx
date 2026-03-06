import getCurrentUser from "@/app/actions/getCurrentUser";
import Profile from "@/app/components/Profile/Profile";
import Sidebar from "@/app/components/Sidebar";

const ProfilePage = async () => {
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
			<div className="z-5 w-full pt-[2vh] max-h-screen overflow-y-scroll pb-[5vh]">
				<Profile />
			</div>
		</div>
	);
};

export default ProfilePage;
