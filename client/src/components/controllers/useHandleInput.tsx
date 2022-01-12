import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
	CREATE_FILE,
	GET_ALL_FILES,
	DELETE_FILE,
} from "../../queries/FileQueries";

import useFiles from "../Terminal/useFiles";

const useHandleInput = () => {
	const { files } = useFiles();

	const [values, setValues] = useState({
		userInput: "",
	});

	const [disabled, setDisabled] = useState<boolean>(false);

	const [typing, setBlinking] = useState<boolean>(false);

	const [showComponent, setShowComponent] = useState<boolean>(false);

	const [newInput, setNewInput] = useState<boolean>(false);

	const [showError, setShowError] = useState<boolean>(false);

	const [errorHandling] = useState({
		message: "Command not found",
	});

	const [createFile] = useMutation(CREATE_FILE, {
		refetchQueries: [GET_ALL_FILES],
	});

	const [deleteFile] = useMutation(DELETE_FILE, {
		refetchQueries: [GET_ALL_FILES],
	});

	const handleChangeInput = (e: any) => {
		setBlinking(true);
		setValues({
			userInput: e.target.value,
		});
	};

	const manageInput = () => {
		switch (values.userInput.trim()) {
			case "ls":
				setShowComponent(true);
				setShowError(false);
				break;
			case "mkdir":
				setShowComponent(true);
				setShowError(false);
				break;
			case "touch":
				setShowComponent(true);
				setShowError(false);
				break;
			case "rm":
				setShowComponent(true);
				setShowError(false);
				break;
			default:
				setShowComponent(false);
				setShowError(true);
		}
	};

	const handleClickInput = (e: any) => {
		e.preventDefault();
		setDisabled(true);
		setNewInput(true);
		manageInput();
		let folder = values.userInput.includes("mkdir", 0);
		let textFile = values.userInput.includes("touch", 0);
		if (folder || textFile) {
			createFile({
				variables: {
					createFileId: (Math.random() * 10)
						.toFixed(5)
						.toString()
						.replace(".", ""),
					name: folder
						? values.userInput.split("mkdir")[1].trim()
						: values.userInput.split("touch")[1].trim(),
					type: folder ? "FOLDER" : "TEXT_FILE",
				},
			});
		}
		let removeFile = values.userInput.includes("rm", 0);
		if (removeFile) {
			let searchFile = values.userInput.slice(3);
			console.log(searchFile);
			const foundFile = files.filter((obj) =>
				Object.values(obj).some((val) => val.includes(searchFile))
			);
			const fileID = foundFile[0].id;
			deleteFile({
				variables: {
					deleteFileId: fileID,
				},
			});
		}
	};

	return {
		values,
		disabled,
		typing,
		handleChangeInput,
		handleClickInput,
		showComponent,
		showError,
		newInput,
		errorHandling,
	};
};

export default useHandleInput;
