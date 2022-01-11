import useHandleInput from "./useHandleInput";
import { BsArrowRightShort } from "../icons/Icons";

import File from "../Files/File";
import NewFile from "../Files/NewFile";

import { FileType } from "../../types/FileType";

import "./UserInput.css";

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
				<BsArrowRightShort
					fill="#41c731"
					stroke="#41c731"
					height="0.7rem"
					width="0.7rem"
					className="arrow"
				/>
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
					<p
						className={
							values.userInput.includes("mkdir", 0) ||
							values.userInput.includes("touch", 0)
								? "none"
								: "err"
						}
					>
						{values.userInput}: {errorHandling.message}
					</p>
				)}
			</div>
			{newInput && <UserInput width={width} height={height} files={files} />}
		</>
	);
};

export default UserInput;
