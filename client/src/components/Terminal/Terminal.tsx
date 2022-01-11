import { useState, useEffect, MouseEventHandler } from "react";
import { useQuery } from "@apollo/client";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { AiFillCloseCircle, IoMdRemoveCircle } from "./Icons";

import { GET_ALL_FILES } from "../../queries/FileQueries";
import { FileType } from "../../types/FileType";
import UserInput from "../controllers/UserInput";
import "./Terminal.css";

const Terminal: React.FC = () => {
	const { loading, error, data } = useQuery(GET_ALL_FILES);

	const [size, setSize] = useState({ width: 640, height: 480 });

	const handleResize = (data: any): void =>
		setSize({ width: data.clientX, height: data.clientY });

	const [files, setFiles] = useState<Array<FileType>>([]);

	const time: Date = new Date();

	const date: string = new Date().toDateString().slice(0, 10);

	const [hour, minutes, seconds]: Array<number> = [
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
	];

	const login: string = `Last login: ${date} ${hour}:${minutes}:${seconds}`;

	useEffect(() => {
		if (!loading && data) {
			setFiles(data.getAllFiles.results);
		}
	}, [loading, data]);

	if (loading) <p>Loading...</p>;
	if (error) <p>Somethins went wrong: {error.message}</p>;

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
