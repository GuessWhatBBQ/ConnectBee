import express from "express";
import { addFriend, signin, signup } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/friend/add", auth, addFriend);

export default router;
