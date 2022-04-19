import React from 'react';
import { useSelector } from 'react-redux';

import Usercard from "../Usercard/Usercard";

const SearchResult = () => {
  const userSearchResult = useSelector(state => state.search);
  console.log(userSearchResult);
  return (
    <div>
      {
        userSearchResult.map((user) => {
          return <Usercard key={user._id} profilePic={user.profilePic} name={user.name} />;
        })
      }
    </div>
  );
};

export default SearchResult;
