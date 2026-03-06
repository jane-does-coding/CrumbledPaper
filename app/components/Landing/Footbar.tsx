const Footbar = () => {
	return (
		<div>
			<div className="border-t-2 border-dotted borde4r-black flex flex-col items-center justify-between px-[5vw] pb-[2vh] pt-[1vh]">
				<div className="flex items-center justify-between w-full">
					<h3 className="text-[5vh]">Crumbled Paper</h3>
					<p className="text-[3vh]">Learn why people leave your company</p>
					<div className="flex items-center justify-center gap-[3vw]">
						<a href="/" className="text-[3vh]">
							Early access
						</a>
						<a href="/" className="text-[3vh]">
							Pricing
						</a>
						<a href="/" className="text-[3vh]">
							Reviews
						</a>
						<a href="/" className="text-[3vh]">
							Contact
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footbar;
