import mongoose from "mongoose";
import * as ConversationHistory from './ConversationHistory.js';

const ObjectId = mongoose.Types.ObjectId;

export const getConversation = async (conversationId) => {
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

export const getConversationsList = async (userId) => {
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

export const insertNewMessage = async (conversationId, senderId, message) => {
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

