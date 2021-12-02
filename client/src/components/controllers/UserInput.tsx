import useHandleInput from "./useHandleInput";
import { BsArrowRightShort } from "react-icons/bs";
import "./UserInput.css";

const UserInput: React.FC<{ files: any }> = (files) => {
	const { values, typing, disabled, handleChangeInput } = useHandleInput();
	return (
		<div className="form-container">
			<BsArrowRightShort className="arrow" />
			<p className="tilde"> ~ </p>
			<form>
				<input
					autoFocus
					type="text"
					value={values.userInput}
					onChange={handleChangeInput}
					disabled={!typing ? disabled : disabled}
				/>
			</form>
		</div>
	);
};

export default UserInput;
