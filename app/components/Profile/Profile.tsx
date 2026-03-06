"use client";

const Profile = () => {
	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh]">
			{/* Header */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">Profile</h1>
			</div>

			{/* Main Info */}
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted drop-shadow-md">
				<div className="w-full flex border-b-2 border-dotted border-black">
					<div className="w-1/3 py-[3vh] px-[2vw] border-r-2 border-dotted border-black flex items-center justify-center">
						<div className="w-[10vw] h-[10vw] border-2 border-dotted border-black rounded-full flex items-center justify-center text-[3vh]">
							JS
						</div>
					</div>

					<div className="w-2/3 py-[3vh] px-[3vw] flex flex-col justify-center gap-[1vh]">
						<h2 className="text-[4vh] leading-[4vh]">Jane Smith</h2>
						<p className="text-[2.5vh]">theusernamehere</p>
						<p className="text-[2.5vh]">jane.smith@company.com</p>
					</div>
				</div>

				{/* Details */}
				<div className="w-full flex flex-col">
					<div className="flex justify-between py-[2vh] px-[2vw] border-b-2 border-dotted border-black">
						<p className="text-[2.5vh]">Department</p>
						<p className="text-[2.5vh]">Human Resources</p>
					</div>

					<div className="flex justify-between py-[2vh] px-[2vw] border-b-2 border-dotted border-black">
						<p className="text-[2.5vh]">Joined</p>
						<p className="text-[2.5vh]">March 12, 2024</p>
					</div>

					<div className="flex justify-between py-[2vh] px-[2vw] border-b-2 border-dotted border-black">
						<p className="text-[2.5vh]">Total Interviews Created</p>
						<p className="text-[2.5vh]">42</p>
					</div>

					<div className="flex justify-between py-[2vh] px-[2vw]">
						<p className="text-[2.5vh]">Completed Reviews</p>
						<p className="text-[2.5vh]">37</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
