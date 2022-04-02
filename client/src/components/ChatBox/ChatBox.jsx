import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import InputBox from '../InputBox/InputBox';

import './ChatBox.css';

/** @typedef {import("socket.io-client").Socket} io */

/**
 * User type definition
 * @typedef {Object} ChatBoxProps
 * @property {any[]} Conversation History
 * @property {io} socket
 */

/**
 * @param {ChatBoxProps} JSX Props
 */
function ChatBox ({ conversationHistory, socket, participents }) {
    var [messages, setMessages] = useState(conversationHistory);
    const mess = messages.map((message) => {
        let sender = false;
        if (participents.selfID !== message.sender.toString()) {
            sender = true;
        }
        return (
            <Message message={message} key={message._id} sender={sender}/>
        );
    });
    const createNewMessage = (text) => {
        const newMessage = {
            text: text,
            sender: participents.selfID,
        };
        socket.emit("newMessageSent", {selfProfileID: participents.selfID, conversationID: participents.conversationID, message: text});
        setMessages((messages) => messages.concat([newMessage]));
    }
    useEffect(() => {
        socket.on('newMessageReceived', ({ senderProfileID, message }) => {
            console.log(message);
            if (senderProfileID === participents.selfID) {
                return;
            }
            const newMessage = {
                text: message,
                sender: senderProfileID,
            };
            setMessages((messages) => messages.concat([newMessage]));
        });
    }, []);
    useEffect(() => {
        setMessages(conversationHistory);
    }, [participents]);
    return (
        <div className="chatbox">
          {mess}
          <InputBox handleNewMessage={createNewMessage}/>
        </div>
    );
}

export default ChatBox
