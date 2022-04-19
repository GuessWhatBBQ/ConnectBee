import React from 'react';
import { useSelector } from 'react-redux';

import Request from "../RequestCard/RequestCard";

const PendingRequests = () => {
  const userPendingRequests = useSelector(state => state.requests);
  return (
    <div>
      {
        userPendingRequests.map((request) => {
          return <Request key={request._id} profilePic={request.profilePic} name={request.name} />;
        })
      }
    </div>
  );
};

export default PendingRequests;
