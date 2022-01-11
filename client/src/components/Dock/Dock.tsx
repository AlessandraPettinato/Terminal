import "./Dock.css";

import { MouseEventHandler } from "react";

const Dock: React.FC<{
	handleClickTerminal: MouseEventHandler<HTMLImageElement>;
}> = ({ handleClickTerminal }) => {
	return (
		<div className="dock-container">
			<div>
				<ul>
					<li>
						<span>Chrome</span>

						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640188085/pngegg_rjnob8.png"
							alt="chrome icon"
						/>
					</li>
					<li>
						<span>Terminal</span>

						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640187916/favpng_macintosh-terminal-macos-command-line-interface_ziuzg2.png"
							alt="terminal icon"
							onClick={handleClickTerminal}
						/>
					</li>
					<li>
						<span>App Store</span>

						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640187961/favpng_blue-computer-icon-area-text_vcpvdp.png"
							alt="app-store icon"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dock;
