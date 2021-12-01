import { FileModel } from "./models/Folder";

export const resolvers = {
	Query: {
		getAllFiles: async () => {
			const results = await FileModel.find({});
			return {
				results: results,
			};
		},
	},
};
