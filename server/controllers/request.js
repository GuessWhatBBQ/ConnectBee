import { getUserFriendRequests } from "../models/user.js";

export const fetchUserFriendRequests = async (req, res) => {
  const result = await getUserFriendRequests(req.userId);
  res.status(200).json({ result });
};
