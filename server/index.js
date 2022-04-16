import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import searchRoutes from "./routes/search.js";
import conversationRoutes from "./routes/conversations.js";
import { createServer } from "http";
import { Server } from "socket.io";

import { insertNewMessage } from "./models/message.js";

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/api/search", searchRoutes);
app.get("/conversations", conversationRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    socket.on("newMessageSent",({ selfProfileID, conversationID, message }) => {
        socket.to(conversationID).emit("newMessageReceived", { senderProfileID: selfProfileID, message });
        insertNewMessage(conversationID.toString(), selfProfileID.toString(), message);
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
