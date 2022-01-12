import { useState } from "react";
import { Rnd } from "react-rnd";

import {
	AiFillCloseCircle,
	IoMdRemoveCircle,
	AiFillFolder,
} from "../icons/Icons";
import useFiles from "./useFiles";
import UserInput from "../controllers/UserInput";
import "./Terminal.css";

const Terminal: React.FC = () => {
	const { files } = useFiles();

	const [size] = useState({ width: 640, height: 480 });

	const time: Date = new Date();

	const date: string = new Date().toDateString().slice(0, 10);

	const [hour, minutes, seconds]: Array<number> = [
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
	];

	const login: string = `Last login: ${date} ${hour}:${minutes}:${seconds}`;

	return (
		<Rnd
			className="terminal-window"
			default={{ x: 10, y: 10, width: size.width, height: size.height }}
		>
			<div className="bar">
				<AiFillCloseCircle
					fill="#ff5f57"
					stroke="#ff5f57"
					height="1rem"
					width="1rem"
					className="icon-exit"
				/>
				<IoMdRemoveCircle
					fill="#febc2e"
					stroke="#febc2e"
					height="1rem"
					width="1rem"
					className="icon-minimize"
				/>
				<AiFillFolder
					fill="#19a4df"
					stroke="#19a4df"
					height="1rem"
					width="1rem"
					className="icon-folder"
				/>
				<p className="user">alessandrapettinato</p>
			</div>
			<div className="login">{login}</div>
			<div className="user-container">
				<UserInput width={size.width} height={size.height} files={files} />
			</div>
		</Rnd>
	);
};

export default Terminal;
