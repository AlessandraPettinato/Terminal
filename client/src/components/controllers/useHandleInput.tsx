import { useState } from "react";

const useHandleInput = () => {
	const [values, setValues] = useState({
		userInput: "",
	});

	const [disabled, setDisabled] = useState(false);

	const [typing, setBlinking] = useState(false);

	const handleChangeInput = (e: any) => {
		setBlinking(true);
		setValues({
			userInput: e.target.value,
		});
	};

	return { values, disabled, typing, handleChangeInput };
};

export default useHandleInput;
