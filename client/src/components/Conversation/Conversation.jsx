import React from 'react'
import './Conversation.css'

const defaultID = '0'
const Conversation = ({ profile, conversationID, handleJoinRoomRequest }) => {
    function handleClick(event) {
        event.preventDefault();
        handleJoinRoomRequest(defaultID, conversationID);
    }
    return (
        <div className='conversation' onClick={handleClick}>
            <img className='conversation-profile-image' src='img/profile/1.png' />
            <p className='conversation-profile-name' >{profile}</p>
        </div>
    )
}

export default Conversation
