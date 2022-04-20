import express from "express";
import {
  fetchConversation,
  fetchConversationList,
  createNewConversation,
} from '../controllers/conversations.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:conversationId', auth, fetchConversation);

router.get('/conversationlist/:userId', auth, fetchConversationList);

router.post('/newconversation', auth, createNewConversation);

export default router;
