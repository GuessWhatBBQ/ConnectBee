import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

import ConversationList from '../../components/ConversationList/ConversationList';
import ChatBox from '../../components/ChatBox/ChatBox';

import { getConversationList, getConversation } from '../../api/index';

import './Messenger.css';
import { useSelector } from 'react-redux';

const socket = io();

const Messenger = () => {
    const profile = useSelector(state => state.auth);
    const [participents, setParticipents] = useState({
        selfID: profile.authData.result._id,
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
        getConversation(newConversationID, setConversationHistory, setParticipents);
    }

    useEffect(() => {
      getConversationList(participents.selfID, setConversationList, handleConversationChange);
    }, []);

    return (
        <div className='messenger'>
            <ConversationList conversationList={conversationList} socket={socket} participents={participents} handleConversationChange={handleConversationChange}/>
            <ChatBox conversationHistory={conversationHistory.messages} socket={socket} participents={participents}/>
        </div>
    );
};

export default Messenger;
