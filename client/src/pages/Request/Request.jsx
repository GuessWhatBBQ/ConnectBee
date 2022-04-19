import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import PendingRequests from "../../components/PendingRequests/PendingRequests";

import {
  fetchUserRequests
} from '../../actions/request';

import './Request.css';

const Search = ({ }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserRequests());
  }, [dispatch]);
  return (
    <div className='request'>
      {/* <Leftbar></Leftbar> */}
      <PendingRequests />
      {/* <Rightbar></Rightbar> */}
    </div>
  )
}

export default Search;
