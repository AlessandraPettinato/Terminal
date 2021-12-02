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
		createFile: async (_: any, { id, name, type }: File) => {
			const newFile = await FileModel.create({
				id: id,
				name: name,
				type: type,
			});

			return newFile;
		},

		deleteFile: async (_: any, { id }: File) => {
			const deleteFile = await FileModel.findOneAndDelete({ id: id });

			return deleteFile;
		},
	},
};
