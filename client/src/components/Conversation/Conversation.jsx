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
            <img className='conversation-profile-image' src={profile.profileImage} />
            <p className='conversation-profile-name' >{profile.profileName}</p>
        </div>
    )
}

export default Conversation
