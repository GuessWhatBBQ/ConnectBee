import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Messenger from './pages/Messenger/Messenger';
import Search from './pages/Search/Search';
import Request from './pages/Request/Request';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/messenger" exact element={<Messenger />} >
          <Route path=":conversationID" element={<Messenger />} />
        </Route>
        <Route path="/search" exact element={<Search />} >
          <Route path=":query" element={<Search />} />
        </Route>
        <Route path="/friends" exact element={<Request />} >
          <Route path="request" element={<Request/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
