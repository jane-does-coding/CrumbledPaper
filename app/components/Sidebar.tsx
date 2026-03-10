"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
	LuChartLine,
	LuCircleFadingPlus,
	LuLayoutDashboard,
	LuLogOut,
	LuMail,
	LuPin,
	LuUser,
} from "react-icons/lu";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface NavbarProps {
	currentUser?: User | null;
}

const Sidebar = ({ currentUser }: NavbarProps) => {
	const [pinned, setPinned] = useState(true);
	const [notificationsCount, setNotificationsCount] = useState<number>(0);
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	const activeIconClasses =
		"bg-neutral-800 border-[2px] border-neutral-300 text-black";
	const inactiveIconClasses =
		"bg-neutral-100 border-[2px] border-neutral-300 hover:bg-neutral-200/75 transition-all ease-in-out duration-300 hover:border-neutral-500 text-neutral-500 hover:text-neutral-800";

	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const res = await fetch("/api/notifications");
				if (!res.ok) return;
				const data = await res.json();
				setNotificationsCount(data?.length || 0);
				console.log(notificationsCount);
			} catch (error) {
				console.error("Failed to fetch notifications:", error);
			}
		};
		fetchNotifications();
	}, []);

	return (
		<div
			className={`flex flex-col justify-between ${
				pinned ? "w-[19vw]" : "w-[6vw] hover:w-[19vw]"
			} border-r-2 border-neutral-900 border-dotted transition-all duration-400 h-screen overflow-hidden bg-white px-[1vw] py-[3vh] sticky drop-shadow-lg z-50`}
		>
			<button
				onClick={() => setPinned(!pinned)}
				className="absolute top-[1vh] left-[16.5vw] p-2 rounded-full text-neutral-400 transition-colors cursor-pointer"
			>
				<LuPin
					className={`text-[2vh] ${
						pinned ? "text-neutral-800" : "text-neutral-400"
					}`}
				/>
			</button>

			<div className="flex flex-col gap-[2vh] items-start justify-start">
				<Link
					href={"/"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted`}
				>
					<Image
						src="/logo.png"
						alt="Logo"
						width={200}
						height={200}
						className="animate-slow-spin w-[5vw] top-[3vh] left-[2vw] transition-all ease-in-out hover:scale-120 duration-300 cursor-pointer bg-white rounded-full p-[1vh] z-99 border-[0.5px] border-black"
					/>
					<div className="absolute text-black tracking-[1.5px] w-[15vw] text-[3vh] font-extrabold right-[-16vw] flex items-center justify-start top-[50%] translate-y-[-50%] steiner">
						Crumbled Paper
					</div>
				</Link>

				<Link
					href={"/dashboard"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/dashboard") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuLayoutDashboard
						className={`text-[3vh] ${
							isActive("/dashboard") ? "text-white" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Dashboard
					</div>
				</Link>

				{/* <Link
					href={"/analytics"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/analytics") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuChartLine
						className={`text-[3vh] ${
							isActive("/analytics") ? "text-white" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Analytics
					</div>
				</Link> */}

				<Link
					href={"/notifications"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/notifications") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuMail
						className={`text-[3vh] ${
							isActive("/notifications") ? "text-white" : ""
						}`}
					/>
					{notificationsCount > 0 && (
						<span className="absolute top-[0.5vh] right-[0.5vw] bg-blue-500 w-[2.25vh] h-[2.25vh] flex items-center justify-center text-white text-[1.4vh] px-[0.5vh] rounded-full">
							{notificationsCount}
						</span>
					)}
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Notification
					</div>
				</Link>

				<Link
					href={"/send-interview"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/send-interview")
							? activeIconClasses
							: inactiveIconClasses
					}`}
				>
					<LuCircleFadingPlus
						className={`text-[3vh] ${
							isActive("/send-interview") ? "text-white" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Send Interview
					</div>
				</Link>

				<Link
					href={"/profile"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/profile") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuUser
						className={`text-[3vh] ${isActive("/profile") ? "text-white" : ""}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Profile
					</div>
				</Link>
			</div>

			{currentUser && (
				<button
					onClick={() => signOut()}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-none border-dotted ${
						isActive("/logout") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuLogOut
						className={`text-[3vh] ${isActive("/logout") ? "text-white" : ""}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] hover:font-medium ease-in-out py-[1vh] transition-all translate-y-[-50%]">
						Logout
					</div>
				</button>
			)}
		</div>
	);
};

export default Sidebar;
