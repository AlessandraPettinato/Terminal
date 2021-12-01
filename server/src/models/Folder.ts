import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
	id: { type: String },
	name: String,
	type: String,
});

export const FileModel = mongoose.model("files", FileSchema);
