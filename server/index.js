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
        const roomID = generateRoomID(conversationID);
        socket.to(conversationID).emit("newMessageReceived", { senderProfileID: selfProfileID, message });
        ConversationHistoryModel.insertNewMessage(conversationID.toString(), selfProfileID.toString(), message);
    });
    socket.on("joinNewRoom", ({ conversationID }) => {
        const roomID = generateRoomID(conversationID);
        // console.log("Room joined: " + conversationID)
        socket.join(conversationID);
    });
    socket.on("leaveRoom", ({selfProfileID, conversationID}) => {
        socket.leave(conversationID);
    });
});

// Debugging code for socket connection

// io.of("/").adapter.on("create-room", (room) => {
//     console.log(`room ${room} was created`);
// });

// io.of("/").adapter.on("delete-room", (room) => {
//     console.log(`room ${room} was deleted`);
// });

// io.of("/").adapter.on("join-room", (room, id) => {
//     console.log(`socket ${id} has joined room ${room}`);
// });

// io.of("/").adapter.on("leave-room", (room, id) => {
//     console.log(`socket ${id} has left room ${room}`);
// });

httpServer.listen(5000);
