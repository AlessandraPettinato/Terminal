import useHandleInput from "./useHandleInput";
import { BsArrowRightShort } from "react-icons/bs";

import File from "../Files/File";
import NewFile from "../Files/NewFile";
import "./UserInput.css";
import { FileType } from "../../types/FileType";

const UserInput: React.FC<{
	files: Array<FileType>;
	width: number;
	height: number;
}> = ({ files, width, height }) => {
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
						width={width}
						height={height}
						autoFocus
						type="text"
						value={values.userInput}
						onChange={handleChangeInput}
						disabled={!typing ? disabled : disabled}
					/>
				</form>
				<div className="files-container">
					{showComponent &&
						values.userInput === "ls" &&
						files.map((item: { id: string; name: string; type: string }) => {
							const { id, name, type } = item;
							return <File key={id} name={name} type={type} />;
						})}
				</div>
				{newInput &&
					(values.userInput === "mkdir" ||
						(values.userInput === "touch" && <NewFile />))}
				{showError && (
					<p className="err">
						{values.userInput}: {errorHandling.message}
					</p>
				)}
			</div>
			{newInput && <UserInput width={width} height={height} files={files} />}
		</>
	);
};

export default UserInput;
