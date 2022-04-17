import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import search from "./search";
import requests from "./requests";

export default combineReducers({ posts, auth, search, requests });
