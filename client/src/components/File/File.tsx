const File: React.FC<{ id: string; name: string; type: string }> = ({
	id,
	name,
	type,
}) => {
	return (
		<>
			<p>{name}</p>
		</>
	);
};

export default File;
