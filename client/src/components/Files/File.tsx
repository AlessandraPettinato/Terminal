import "./File.css";

const File: React.FC<{ name: string; type: string }> = ({ name, type }) => {
	return (
		<>
			<p className={type === "FOLDER" ? "documents" : "text-file"}>{name}</p>
		</>
	);
};

export default File;
