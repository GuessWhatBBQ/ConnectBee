import React from 'react';
import { useSelector } from 'react-redux';


import RequestCard from "../RequestCard/RequestCard";

const PendingRequests = () => {
  const userPendingRequests = useSelector(state => state.requests);
  return (
    <div>
      {
        userPendingRequests.map((request) => {
          return <RequestCard key={request._id} receiverId={request._id} profilePic={request.profilePic} name={request.name} />;
        })
      }
    </div>
  );
};

export default PendingRequests;
