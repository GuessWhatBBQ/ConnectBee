import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Messenger from './pages/Messenger/Messenger';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
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
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
