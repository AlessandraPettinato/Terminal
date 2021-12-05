import useHandleInput from "../controllers/useHandleInput";

const NewFile: React.FC = () => {
	const { values } = useHandleInput();
	return (
		<>
			{values.userInput === "mkdir" && (
				<p>{values.userInput.split("mkdir")[1].trim()}</p>
			)}
		</>
	);
};

export default NewFile;
