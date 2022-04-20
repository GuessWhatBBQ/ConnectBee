import { getConversation, getConversationList, insertNewConversation } from "../models/message.js";

export const fetchConversationList = async (req, res) => {
  let conversation = await getConversationList(req.params.userId).then((doc) => doc);
  conversation = conversation.map((convo) => {
    const name = convo.members.find((mem) => {
      return mem._id.toString() !== req.params.userId;
    }).name;
    convo.name = name;
    return convo;
  });
  res.json({
    status: 'ok',
    conversation,
  });
};

export const fetchConversation = async (req, res) => {
  let conversation = await getConversation(req.params.conversationId).then((doc) => doc);
  if (conversation.members) {
    delete conversation.members;
  };
  res.json({
    status: 'ok',
    conversation,
  });
};

export const createNewConversation = async (req, res) => {
  const { conversationId } = req.body;
  const newConversationId = await insertNewConversation(req.userId, conversationId);
  res.status(200).json({ newConversationId });
}
