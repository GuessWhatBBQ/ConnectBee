import { getUserSearchResult } from "../models/user.js";

export const fetchUserSearchResult = async (req, res) => {
  const { searchStr } = req.query;
  const result = await getUserSearchResult(req.userId, searchStr);
  res.status(200).json({ result });
};
