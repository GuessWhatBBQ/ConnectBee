import express from "express";
import {
  fetchUserSearchResult
} from "../controllers/search.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/user", auth, fetchUserSearchResult);

export default router;
