import mongoose, { Schema } from "mongoose";

const writerSchema = new Schema({
  authorName: { type: String, required: [true, "Please enter author name at least 1"] },
  imgPath: { type: String, required: [true, "Please enter author picture "] },
});

const Writers = mongoose.models.Writers || mongoose.model("Writers", writerSchema);
export default Writers;
