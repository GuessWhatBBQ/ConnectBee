import mongoose from "mongoose";
import Post from "./postSchema.js"
import User from "./userSchema.js"

const ObjectId = mongoose.Types.ObjectId;
export const getPosts = async (userId) => {
  const newsFeedCreators = await User.findById(
    userId,
  ).then((doc) => doc.get('friends'));
  newsFeedCreators.push(userId);
  const posts = await Post.find({
    creator: {
      $in: newsFeedCreators,
    }
  });
  return posts;
};
