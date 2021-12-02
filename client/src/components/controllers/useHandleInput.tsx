import { useState } from "react";

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
