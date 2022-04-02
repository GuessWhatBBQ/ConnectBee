const mongoose = require('mongoose');
const ConversationHistory = require('./ConversationHistory');
const User = require('./User');

const ObjectId = mongoose.Types.ObjectId;

async function getConversation(conversationId) {
    try {
        ObjectId(conversationId);
    } catch (err) {
        return [];
    }
    const doc = await ConversationHistory.findOne({
        _id: ObjectId(conversationId)
    })
    return doc;
}

async function getConversationsList(userId) {
    try {
        ObjectId(userId);
    } catch (err) {
        return [];
    }
    const doc = await ConversationHistory.aggregate([
        {
            $match: {
                members: {
                    $in: [ObjectId(userId)],
                }
            },
        },
        {
            $lookup : {
                from: 'users',
                localField: 'members',
                foreignField: '_id',
                as: 'members'
        },
        }
    ])
    return doc;
}

async function insertNewMessage(conversationId, senderId, message) {
    const doc = await ConversationHistory.findOneAndUpdate(
        { _id: ObjectId(conversationId) },
        {
            $push: {
                messages: {
                    sender: ObjectId(senderId),
                    text: message,
                },
            },
        }
    );
    doc.save();
}

exports.insertNewMessage = insertNewMessage;
exports.getConversation = getConversation;
exports.getConversationsList = getConversationsList;
