import mongoose from "mongoose";
import User from "./userSchema.js";

const ObjectId = mongoose.Types.ObjectId;

export const addFriendToUser = async (userId, friendId) => {
  const doc = await User.findByIdAndUpdate(userId, {
    $addToSet: {
      friends: ObjectId(friendId),
    },
  });
  doc.save();
};

export const insertFriendRequest = async (userId, friendId) => {
  await User.findOneAndUpdate(
    {
      _id: friendId,
      "friendRequests.sender": { $ne: userId },
    },
    {
      $push: {
        friendRequests: {
          sender: userId,
          approved: false,
        },
      },
    }
  );
};

export const removeFriendRequest = async (userId, friendId) => {
  const doc = await User.findByIdAndUpdate(userId, {
    $pull: {
      friendRequests: {
        sender: ObjectId(friendId),
      },
    },
  });
  doc.save();
};

export const getUserSearchResult = async (userId, searchStr) => {
  const doc = await User.find();
  return doc;
};

export const getUserFriendRequests = async (userId) => {
  const doc = await User.aggregate([
    {
      $match: {
        _id: ObjectId(userId),
        "friendRequests.approved": false,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "friendRequests.sender",
        foreignField: "_id",
        as: "friendRequests",
      },
    },
    {
      $project: {
        "friendRequests.name": 1,
        "friendRequests.email": 1,
        "friendRequests.friends": 1,
        "friendRequests._id": 1,
        "friendRequests.profilePicture": 1,
        _id: 0,
      },
    },
  ]);
  return doc[0];
};
