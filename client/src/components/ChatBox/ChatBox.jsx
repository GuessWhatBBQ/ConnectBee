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
        return (
            <Message message={message} key={message.key}/>
        );
    });
    const createNewMessage = (text) => {
        const newMessage = {
            profileImage: 'img/profile/1.png',
            text: text,
            sender: false,
        };
        socket.emit("newMessageSent", {selfProfileID: participents.selfID, conversationID: participents.conversationID, message: text});
        setMessages((messages) => messages.concat([newMessage]));
    }
    useEffect(() => {
        socket.on('newMessageReceived', ({ senderProfileID, message }) => {
            // Hacky fix for sent message reemitted to self
            // if (senderProfileID === participents.selfID) {
            //     return;
            // }
            const newMessage = {
                profileImage: 'img/profile/1.png',
                text: message,
                sender: true,
            };
            setMessages((messages) => messages.concat([newMessage]));
        })
    }, []);
    useEffect(() => {
        setMessages(conversationHistory);
    }, [participents])
    return (
        <div className="chatbox">
          {mess}
          <InputBox handleNewMessage={createNewMessage}/>
        </div>
    );
}

export default ChatBox
