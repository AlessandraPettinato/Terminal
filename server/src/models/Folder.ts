import mongoose from "mongoose";

const FolderSchema = new mongoose.Schema({
	id: { type: String },
	name: String,
});

export const FolderModel = mongoose.model("folders", FolderSchema);
