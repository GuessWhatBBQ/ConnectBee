import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptRequest } from '../../actions/request';

const RequestCard = ({ profilePic, name, receiverId }) => {
  const dispatch = useDispatch();
  const handleAcceptRequest = () => {
    dispatch(acceptRequest(receiverId));
  };
  return (
    <div className='usercard'>
      <img src={profilePic} />
      <p>{name}</p>
      <p onClick={handleAcceptRequest}>Accept Request</p>
      <p>Reject Request</p>
    </div>
  );
};

export default RequestCard;
