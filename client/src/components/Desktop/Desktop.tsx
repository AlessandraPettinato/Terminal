import Terminal from "../Terminal/Terminal";
import BottomNavigation from "../Dock/Dock";
import "./Desktop.css";

const Desktop: React.FC = () => {
	return (
		<div className="desktop">
			<Terminal />
			<BottomNavigation />
		</div>
	);
};

export default Desktop;
