import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const ConversationHistory = new mongoose.Schema({
    members: [ObjectId],
    messages: [{
        sender: { type: ObjectId, required: true },
        text: String,
        timeStamp: { type: Date, default: Date.now },
    }],
});

export default mongoose.model('ConversationHistory', ConversationHistory);
