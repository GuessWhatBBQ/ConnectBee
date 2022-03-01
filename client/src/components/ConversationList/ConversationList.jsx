import React from 'react';
import Conversation from '../Conversation/Conversation';
import './ConversationList.css';

const ConversationList = ({ conversationList , socket, handleConversationChange }) => {

    function joinNewConversation(selfProfileID, conversationID) {
        const newRoomInfo = {
            selfProfileID,
            conversationID,
        };
        socket.emit('joinNewRoom', newRoomInfo);
        handleConversationChange(conversationID);
    }
    const conversations = conversationList.map((conversation) => {
        return (
            <Conversation profile={conversation.name} key={conversation._id} conversationID={conversation._id} handleJoinRoomRequest={joinNewConversation}/>
        );
    });
    return (
        <div className='conversation-list'>
            {conversations}
        </div>
    );
};

export default ConversationList;
