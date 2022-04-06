import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  googleId: { type: String },
  profilePicture: { type: String },
  age: { type: Number },
  groups: { type: [ObjectId] },
  friends: { type: [ObjectId] },
  posts: { type: [ObjectId] },
  conversations: { type: [ObjectId] },
  notifications: [{
    sender: ObjectId,
    text: String,
    type: String,
    creationDate: {
      type: Date,
      default: new Date(),
    }
  }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
