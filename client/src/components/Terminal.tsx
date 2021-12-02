import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_FILES } from "../queries/File";

const Terminal: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_FILES);

	const [files, setFiles] = useState([]);

	useEffect(() => {
		if (!loading && data) {
			setFiles(data.getAllFiles.results);
		}
	}, [loading, data]);

	console.log(files);

	if (loading) <p>Loading...</p>;
	if (error) <p>Somethins went wrong: {error.message}</p>;
	return <div>Hello from Terminal</div>;
};

export default Terminal;
