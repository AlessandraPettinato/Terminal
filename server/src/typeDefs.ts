import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type File {
		id: ID!
		name: String
		type: String
	}

	type FileList {
		results: [File]
	}

	type Query {
		getAllFiles: FileList
	}
`;
