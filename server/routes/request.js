import express from "express";
import {
  fetchUserFriendRequests,
  sendFriendRequest
} from "../controllers/request.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/fetchall", auth, fetchUserFriendRequests);
router.post("/send", auth, sendFriendRequest);

export default router;
