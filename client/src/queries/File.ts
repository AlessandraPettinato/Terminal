import { gql } from "@apollo/client";

export const QUERY_GET_ALL_FILES = gql`
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
