import React from 'react';
import Conversation from '../Conversation/Conversation';
import './ConversationList.css';

const ConversationList = ({ friendList , socket, handleConversationChange }) => {

    function joinNewConversation(selfProfileID, conversationID) {
        const newRoomInfo = {
            selfProfileID,
            conversationID,
        };
        socket.emit('joinNewRoom', newRoomInfo);
        handleConversationChange(conversationID);
    }

    const conversations = friendList.map((friend) => {
        return (
            <Conversation profile={friend.profile} key={friend.key} conversationID={friend.key} handleJoinRoomRequest={joinNewConversation}/>
        );
    });
    return (
        <div className='conversation-list'>
            {conversations}
        </div>
    );
};

export default ConversationList;
