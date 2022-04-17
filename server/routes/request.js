import express from "express";
import {
  fetchUserFriendRequests
} from "../controllers/request.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/fetchall", auth, fetchUserFriendRequests);

export default router;
