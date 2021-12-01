import { FolderModel } from "./models/Folder";

export const resolvers = {
	Query: {
		getAllFolders: async () => {
			const results = await FolderModel.find({});
			return {
				results: results,
			};
		},
	},
};
