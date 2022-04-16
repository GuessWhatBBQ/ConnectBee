import React from 'react';

const Usercard = ({profilePic, name}) => {
  return (
    <div className='usercard'>
      <img src={profilePic}/>
      <p>{name}</p>
      <p>Send Friend Request</p>
    </div>
  )
}

export default Usercard;
