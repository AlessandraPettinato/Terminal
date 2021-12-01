import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Folder {
		id: ID!
		name: String
	}

	type FolderList {
		results: [Folder]
	}

	type Query {
		getAllFolders: FolderList
	}
`;
