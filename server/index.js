const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

function generateRoomID(otherID) {
    return '' + otherID;
}

io.on("connection", (socket) => {
    socket.on("newMessageSent",({selfProfileID, conversationID, message}) => {
        socket.to(generateRoomID(conversationID)).emit("newMessageReceived", { senderProfileID: selfProfileID, message });
    });
    socket.on("joinNewRoom", ({selfProfileID, conversationID}) => {
        const roomID = generateRoomID(selfProfileID);
        socket.join(roomID);
    });
    socket.on("leaveRoom", ({selfProfileID, conversationID}) => {
        socket.leave(generateRoomID(selfProfileID, conversationID));
    });
});

httpServer.listen(5000);
