import { getUserSearchResult } from "../models/user.js";

export const fetchUserSearchResult = async (req, res) => {
  const { userId, searchStr } = req.query;
  const result = await getUserSearchResult(userId, searchStr);
  res.status(200).json({ result });
};
