import { gql } from "@apollo/client";

export const GET_ALL_FILES = gql`
	query Files {
		getAllFiles {
			results {
				id
				name
				type
			}
		}
	}
`;

export const CREATE_FILE = gql`
	mutation CreateFile($createFileId: ID, $name: String, $type: FileType) {
		createFile(id: $createFileId, name: $name, type: $type) {
			id
			name
			type
		}
	}
`;
