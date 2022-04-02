import React from 'react';
import './Message.css';

const Message = ({ message, sender }) => {
    return (
        <div className={`message ${sender ? "sender" : "receiver"}`}>
          <img className={`message-profile-image`} src={message.profileImage}/>
          <div className={'message-text'}>{message.text}</div>
        </div>
    );
};

export default Message;
