import React, { useState } from 'react';
import ConversationList from '../../components/ConversationList/ConversationList';
import ChatBox from '../../components/ChatBox/ChatBox';

import { friendList } from './DummyData';
// import { conversationHistory } from './DummyData';
import io from "socket.io-client";

import './Messenger.css';

const Messenger = () => {
    const [participents, setParticipents] = useState({
        selfID: 0,
        conversationID: 0,
    });
    const socket = io();
    function handleConversationChange(newConversationID) {
        // socket.emit('leaveRoom', {selfProfileID: participents.selfID, conversationID: participents.conversationID});
        setParticipents((participents) => ({
            ...participents,
            conversationID: newConversationID,
        }));
    }
    return (
        <div className='messenger'>
            <ConversationList friendList={friendList} socket={socket} participents={participents} handleConversationChange={handleConversationChange}/>
            <ChatBox conversationHistory={friendList[participents.conversationID].conversationHistory} socket={socket} participents={participents}/>
        </div>
    );
};

export default Messenger;
