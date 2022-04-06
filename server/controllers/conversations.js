import { getConversation, getConversationList } from "../models/message.js";

export const fetchConversationList = async (req, res) => {
  let conversation = await getConversationList(req.params.userId).then((doc) => doc);
  conversation = conversation.map((convo) => {
    const { first, last } = convo.members.find((mem) => {
      return mem._id.toString() !== req.params.userId;
    }).name;
    convo.name = first + ' ' + last;
    return convo;
  });
  res.json({
    status: 'ok',
    conversation,
  });
}

export const fetchConversation = async (req, res) => {
  let conversation = await getConversation(req.params.conversationId).then((doc) => doc.toObject());
  if (conversation.members) {
    delete conversation.members;
  };
  res.json({
    status: 'ok',
    conversation,
  });
}
