import { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";

import { AiFillCloseCircle, IoMdRemoveCircle } from "../icons/Icons";
import useFiles from "./useFiles";
import UserInput from "../controllers/UserInput";
import "./Terminal.css";

const Terminal: React.FC = () => {
	const { files } = useFiles();

	const [size, setSize] = useState({ width: 640, height: 480 });

	const handleResize = (data: any): void =>
		setSize({ width: data.clientX, height: data.clientY });

	const time: Date = new Date();

	const date: string = new Date().toDateString().slice(0, 10);

	const [hour, minutes, seconds]: Array<number> = [
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
	];

	const login: string = `Last login: ${date} ${hour}:${minutes}:${seconds}`;

	return (
		<Draggable
			handle=".handle"
			scale={1}
			position={undefined}
			bounds={{
				left: 0,
				top: 0,
				right: window.innerWidth - size.width,
				bottom: window.innerHeight - size.height - 80,
			}}
			defaultPosition={{ x: 10, y: 10 }}
		>
			<ResizableBox
				width={size.width}
				height={size.height}
				lockAspectRatio={true}
				minConstraints={[640, 480]}
				className="terminal-window"
				maxConstraints={[
					window.innerWidth,
					window.innerHeight - size.height - 80,
				]}
				onResize={handleResize}
			>
				<div className="bar">
					<AiFillCloseCircle
						fill="#ff5f57"
						stroke="#ff5f57"
						height="0.7rem"
						width="0.7rem"
						className="icon"
					/>
					<IoMdRemoveCircle
						fill="#febc2e"
						stroke="#febc2e"
						height="0.7rem"
						width="0.7rem"
						className="icon"
					/>
				</div>
				<div className="login">{login}</div>
				<div className="user-container">
					<UserInput width={size.width} height={size.height} files={files} />
				</div>
			</ResizableBox>
		</Draggable>
	);
};

export default Terminal;
