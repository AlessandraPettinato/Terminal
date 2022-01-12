import Terminal from "../Terminal/Terminal";
import Dock from "../Dock/Dock";
import useTerminal from "./useTerminal";
import "./Desktop.css";
import "../Dock/Dock.css";

const Desktop: React.FC = () => {
	const { openTerminal, handleClickTerminal } = useTerminal();

	return (
		<div className="desktop">
			<div className={!openTerminal ? "block" : "none"}>
				<Terminal />
			</div>
			<Dock handleClickTerminal={handleClickTerminal} />
		</div>
	);
};

export default Desktop;
