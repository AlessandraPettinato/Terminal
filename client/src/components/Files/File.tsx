import "./File.css";

const File: React.FC<{ item: { type: string; name: string } }> = ({
	item: { type, name },
}) => {
	return (
		<>
			<p className={type === "FOLDER" ? "documents" : "text-file"}>{name}</p>
		</>
	);
};

export default File;
