import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_FILES } from "../../queries/FileQueries";
import { FileType } from "../../types/FileType";

const useFiles = () => {
	const { loading, error, data } = useQuery(GET_ALL_FILES);

	const [files, setFiles] = useState<Array<FileType>>([]);

	useEffect(() => {
		if (!loading && data) {
			setFiles(data.getAllFiles.results);
		}
	}, [loading, data]);

	if (loading) <p>Loading...</p>;
	if (error) <p>Somethins went wrong: {error.message}</p>;

	return {
		files,
	};
};

export default useFiles;
