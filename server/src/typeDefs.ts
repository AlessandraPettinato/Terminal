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

	type Mutation {
		createFile(id: ID, name: String, type: FileType): File
		deleteFile(id: ID): FileList
	}
`;
