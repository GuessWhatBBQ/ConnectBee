import React from 'react';

const RequestCard = ({ profilePic, name }) => {
  return (
    <div className='usercard'>
      <img src={profilePic} />
      <p>{name}</p>
      <p>Accept Request</p>
      <p>Reject Request</p>
    </div>
  );
};

export default RequestCard;
