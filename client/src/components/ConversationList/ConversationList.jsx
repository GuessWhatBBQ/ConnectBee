import React from 'react';
import Conversation from '../Conversation/Conversation';
import './ConversationList.css';

const ConversationList = ({ conversationList , handleConversationChange, participents }) => {

    function joinNewConversation(conversationID) {
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
