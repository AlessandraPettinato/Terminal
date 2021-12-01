import { FileModel } from "./models/Folder";
import { File } from "./types/File";

enum FileType {
	FOLDER = "Folder",
	TEXT_FILE = "Text file",
}

export const resolvers = {
	FileType,
	Query: {
		getAllFiles: async () => {
			const results = await FileModel.find({});
			return {
				results: results,
			};
		},
	},

	Mutation: {
		createFile: async (_: any, { file }: any) => {
			const results = await FileModel.create({
				id: file.id,
				name: file.name,
				type: file.type,
			});
			return {
				results: results,
			};
		},
	},
};
