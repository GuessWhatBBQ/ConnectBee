import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const postSchema = mongoose.Schema({
  caption: String,
  creator: ObjectId,
  tags: [String],
  selectedFile: [String],
  likes: {
    type: [ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Post", postSchema);
