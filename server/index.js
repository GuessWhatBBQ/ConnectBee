import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import { createServer } from "http";
import { Server } from "socket.io";

import * as ConversationHistoryModel from "./model/Message.js";

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

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
            return mem._id.toString() !== req.params.userId;
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

io.on("connection", (socket) => {
    socket.on("newMessageSent",({ selfProfileID, conversationID, message }) => {
        socket.to(conversationID).emit("newMessageReceived", { senderProfileID: selfProfileID, message });
        ConversationHistoryModel.insertNewMessage(conversationID.toString(), selfProfileID.toString(), message);
    });
    socket.on("joinNewRoom", ({ conversationID }) => {
        socket.join(conversationID);
    });
    socket.on("leaveRoom", ({selfProfileID, conversationID}) => {
        socket.leave(conversationID);
    });
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    httpServer.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  })
  .catch((error) => console.log(error.message));
