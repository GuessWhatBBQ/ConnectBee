import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ConversationList from '../../components/ConversationList/ConversationList';
import ChatBox from '../../components/ChatBox/ChatBox';

import { conversations } from './DummyData';
// import { conversationHistory } from './DummyData';
import io from "socket.io-client";

import './Messenger.css';

const Messenger = () => {
    const [participents, setParticipents] = useState({
        selfID: window.location.pathname.toString().slice(1),
        conversationID: '621e52d5efa453256a052183',
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

    const socket = io();
    function handleConversationChange(newConversationID) {
        socket.emit('leaveRoom', { selfProfileID: participents.selfID, conversationID: participents.conversationID });
        socket.emit('joinNewRoom', {conversationID: newConversationID});
        axios.get('/conversation/' + newConversationID).then(({ data }) => {
            setConversationHistory(data.conversation);
        });
        setParticipents((participents) => ({
            ...participents,
            conversationID: newConversationID,
        }));
    }
    useEffect(() => {
        axios.get('/conversation/' + participents.conversationID.toString()).then(({ data }) => {
            setConversationHistory(data.conversation);
            });
    }, []);
    useEffect(() => {
        axios.get('/conversations/' + participents.selfID).then(({ data }) => {
            setConversationList(data.conversation);
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
