import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_FILES } from "../../queries/File";
import { FileType } from "../../types/FileType";

import UserInput from "../controllers/UserInput";
import "./Terminal.css";

const Terminal: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_FILES);

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
		<>
			<header className="login">{login}</header>
			<div className="user-container">
				<UserInput files={files} />
			</div>
		</>
	);
};

export default Terminal;
