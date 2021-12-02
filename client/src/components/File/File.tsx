import "./File.css";

const File: React.FC<{ id: string; name: string; type: string }> = ({
	id,
	name,
	type,
}) => {
	return (
		<>
			<p className={type === "FOLDER" ? "documents" : "text-file"}>{name}</p>
		</>
	);
};

export default File;
