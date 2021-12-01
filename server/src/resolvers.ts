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

	Mutation: {
		createFile: async (_: any, { id, name, type }: any) => {
			const results = await FileModel.create({
				id,
				name,
				type,
			});
			return {
				results: results,
			};
		},
	},
};
