import Landing from "./Landing";
import Video from "./Video";
import Reviews from "./Reviews";
import Footbar from "./Footbar";

const LandingPage = () => {
	return (
		<div className="bg-neutral-100">
			<Landing />
			<Video />
			<Reviews />
			<Footbar />
		</div>
	);
};

export default LandingPage;
