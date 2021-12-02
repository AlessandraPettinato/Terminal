import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_FILE, GET_ALL_FILES } from "../../queries/FileQueries";

const useHandleInput = () => {
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

	const handleChangeInput = (e: any) => {
		setBlinking(true);
		setValues({
			userInput: e.target.value,
		});
	};

	const manageInput = () => {
		switch (values.userInput) {
			case "ls":
				setShowComponent(true);
				setShowError(false);
				break;
			case "mkdir":
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
		if (values.userInput.includes("mkdir", 0)) {
			createFile({
				variables: {
					createFileId: (Math.random() * 10)
						.toFixed(5)
						.toString()
						.replace(".", ""),
					name: values.userInput.split("mkdir")[1].trim(),
					type: "FOLDER",
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
