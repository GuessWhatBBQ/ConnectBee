import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import SearchResult from "../../components/SearchResult/SearchResult";

import {
  fetchUserSearch
} from '../../actions/search';

import './Search.css';

const Search = ({}) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth);
  const { query } = useParams();
  useEffect(() => {
    if (profile) {
      dispatch(fetchUserSearch(profile.authData.result._id, query));
    }
  }, [dispatch]);
  return (
    <div className='search'>
      {/* <Leftbar></Leftbar> */}
      <SearchResult/>
      {/* <Rightbar></Rightbar> */}
    </div>
  )
}

export default Search;
