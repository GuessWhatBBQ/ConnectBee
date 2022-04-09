import mongoose from "mongoose";
import User from "./userSchema.js";

const ObjectId = mongoose.Schema.Types.ObjectId;
export const addFriendToUser = async (userId, friendId) => {
  const doc = await User.findOneAndUpdate(
    { _id : ObjectId(userId) },
    {
      $push: {
        friends: ObjectId(friendId),
      },
    }
  );
  doc.save();
}
