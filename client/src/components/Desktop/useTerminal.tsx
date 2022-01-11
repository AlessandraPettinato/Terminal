import { MouseEventHandler, useState } from "react";

const useTerminal = () => {
	const [openTerminal, setOpenTerminal] = useState(false);

	const handleClickTerminal: MouseEventHandler<HTMLImageElement> = () => {
		setOpenTerminal(!openTerminal);
		console.log("clicked");
	};

	return {
		openTerminal,
		setOpenTerminal,
		handleClickTerminal,
	};
};

export default useTerminal;
