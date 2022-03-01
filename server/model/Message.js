const mongoose = require('mongoose');
const ConversationHistory = require('./ConversationHistory');

const ObjectId = mongoose.Types.ObjectId;

async function getConversation(conversationId) {
    const doc = await ConversationHistory.findOne({
        _id: ObjectId(conversationId)
    })
    return doc;
}

async function insertNewMessage(conversationId, senderId) {
    const doc = await ConversationHistory.findOneAndUpdate(
        { _id: ObjectId(conversationId) },
        {
            $push: {
                messages: {
                    sender: ObjectId(senderId),
                    text: "HI",
                },
            },
        }
    );
    doc.save();
}

exports.insertNewMessage = insertNewMessage;
exports.getConversation = getConversation;
