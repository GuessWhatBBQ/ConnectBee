import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import search from "./search";

export default combineReducers({ posts, auth, search });
