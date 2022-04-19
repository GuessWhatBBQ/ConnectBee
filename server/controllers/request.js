import { getUserFriendRequests, insertFriendRequest } from "../models/user.js";

export const fetchUserFriendRequests = async (req, res) => {
  const result = await getUserFriendRequests(req.userId);
  res.status(200).json({ result });
};

export const sendFriendRequest = async (req, res) => {
  const { receiverId } = req.body;
  try {
    await insertFriendRequest(req.userId, receiverId);
    res.status(200).json({message: "successful"});
  } catch (error) {
    res.status(500).json({message: "failed"});
    console.log(error);
  }
};
