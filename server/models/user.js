import mongoose from "mongoose";
import User from "./userSchema.js";

const ObjectId = mongoose.Types.ObjectId;

export const addFriendToUser = async (userId, friendId) => {
  const doc = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: {
        friends: ObjectId(friendId),
      },
    }
  );
  doc.save();
};

export const addFriendRequest = async (userId, friendId) => {
  const doc = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: {
        friendRequests: {
          sender: ObjectId(friendId),
          approved: false },
      },
    });
  doc.save();
};

export const removeFriendRequest = async (userId, friendId) => {
  const doc = await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        friendRequests: {
          sender: ObjectId(friendId)
        },
      },
    });
  doc.save();
};

export const getUserSearchResult = async (userId, searchStr) => {
  const doc = await User.find();
  return doc;
};
