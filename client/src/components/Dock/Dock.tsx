import "./Dock.css";

const Dock: React.FC = () => {
	return (
		<div className="dock-container">
			<div>
				<ul>
					<li>
						<span>Chrome</span>
						<a href="#">
							<img src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640188085/pngegg_rjnob8.png" />
						</a>
					</li>
					<li>
						<span>Terminal</span>
						<a href="#">
							<img src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640187916/favpng_macintosh-terminal-macos-command-line-interface_ziuzg2.png" />
						</a>
					</li>
					<li>
						<span>App Store</span>
						<a href="#">
							<img src="https://res.cloudinary.com/dg5lakmem/image/upload/v1640187961/favpng_blue-computer-icon-area-text_vcpvdp.png" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dock;
