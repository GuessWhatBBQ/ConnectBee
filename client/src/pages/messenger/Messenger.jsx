import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from "socket.io-client";

import ConversationList from '../../components/ConversationList/ConversationList';
import ChatBox from '../../components/ChatBox/ChatBox';

import './Messenger.css';

const socket = io();

const Messenger = () => {
    const [participents, setParticipents] = useState({
        selfID: window.location.pathname.toString().slice(1),
        conversationID: '0',
    });
    const [conversationHistory, setConversationHistory] = useState({
        _id: "0",
        messages: [{
            sender: "",
            text: "",
            _id: "",
            timeStamp: "",
        }],
    });
    const [conversationList, setConversationList] = useState([{
        _id: "0",
        name: "",
        creationDate: "",
    }]);

    function handleConversationChange(newConversationID) {
        socket.emit('leaveRoom', { selfProfileID: participents.selfID, conversationID: participents.conversationID });
        socket.emit('joinNewRoom', {conversationID: newConversationID});
        axios.get('/conversation/' + newConversationID).then(({ data }) => {
            setConversationHistory(data.conversation);
            setParticipents((participents) => ({
                ...participents,
                conversationID: newConversationID,
            }));
        });
    }

    useEffect(() => {
        axios.get('/conversations/' + participents.selfID).then(({ data }) => {
            setConversationList(data.conversation);
            handleConversationChange(data.conversation[0]._id);
        });
    }, []);

    return (
        <div className='messenger'>
            <ConversationList conversationList={conversationList} socket={socket} participents={participents} handleConversationChange={handleConversationChange}/>
            <ChatBox conversationHistory={conversationHistory.messages} socket={socket} participents={participents}/>
        </div>
    );
};

export default Messenger;
