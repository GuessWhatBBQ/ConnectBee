const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");

const ConversationHistoryModel = require("./model/Message")

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/connectbee');

app.get('/conversation/:conversationId', async (req, res) => {
    let conversation = await ConversationHistoryModel.getConversation(req.params.conversationId).then((doc) => doc.toObject());
    if (conversation.members) {
        delete conversation.members;
    };
    res.json({
        status: 'ok',
        conversation,
    });
})

app.get('/conversations/:userId', async (req, res) => {
    let conversation = await ConversationHistoryModel.getConversationsList(req.params.userId).then((doc) => doc);
    conversation = conversation.map((convo) => {
        const {first, last} = convo.members.find((mem) => {
            return mem._id.toString() !== req.params.userId
        }).name;
        convo.name = first + ' ' + last;
        return convo;
    })
    res.json({
        status: 'ok',
        conversation,
    });
})

const httpServer = createServer(app);
const io = new Server(httpServer);

function generateRoomID(id) {
    return '' + id;
}

io.on("connection", (socket) => {
    socket.on("newMessageSent",({ selfProfileID, conversationID, message }) => {
        socket.to(generateRoomID(conversationID)).emit("newMessageReceived", { senderProfileID: selfProfileID, message });
        console.log("hihi")
        ConversationHistoryModel.insertNewMessage(conversationID, selfProfileID, message);
    });
    socket.on("joinNewRoom", ({ selfProfileID }) => {
        const roomID = generateRoomID(selfProfileID);
        socket.join(roomID);
    });
    socket.on("leaveRoom", ({selfProfileID, conversationID}) => {
        socket.leave(generateRoomID(selfProfileID));
    });
});

httpServer.listen(5000);
