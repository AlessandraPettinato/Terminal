import { gql } from "apollo-server-express";

export const typeDefs = gql`
	enum FileType {
		FOLDER
		TEXT_FILE
	}

	type File {
		id: ID
		name: String
		type: FileType
	}

	type FileList {
		results: [File]
	}

	type Query {
		getAllFiles: FileList
	}

	input FileInput {
		id: ID
		name: String
		type: FileType
	}

	type Mutation {
		createFile(file: FileInput): File
	}
`;
