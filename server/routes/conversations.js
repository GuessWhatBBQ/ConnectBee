import express from "express";
import {
  fetchConversation,
  fetchConversationList
} from '../controllers/conversations.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:conversationId', auth, fetchConversation);

router.get('/conversationlist/:userId', auth, fetchConversationList);

export default router;
