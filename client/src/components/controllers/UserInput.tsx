import useHandleInput from "./useHandleInput";
import { BsArrowRightShort } from "react-icons/bs";

import File from "../File/File";
import "./UserInput.css";
import { FileType } from "../../types/FileType";

const UserInput: React.FC<{ files: Array<FileType> }> = ({ files }) => {
	const {
		values,
		typing,
		disabled,
		handleChangeInput,
		handleClickInput,
		showComponent,
		newInput,
		showError,
		errorHandling,
	} = useHandleInput();
	return (
		<>
			<div className="form-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				<form onSubmit={handleClickInput}>
					<input
						autoFocus
						type="text"
						value={values.userInput}
						onChange={handleChangeInput}
						disabled={!typing ? disabled : disabled}
					/>
				</form>
				{showComponent &&
					values.userInput === "ls" &&
					files.map((item: { id: string; name: string; type: string }) => {
						const { id, name, type } = item;
						return <File key={id} id={id} name={name} type={type} />;
					})}
				{showError && (
					<p>
						{values.userInput}: {errorHandling.message}
					</p>
				)}
			</div>
			{newInput && <UserInput files={files} />}
		</>
	);
};

export default UserInput;
