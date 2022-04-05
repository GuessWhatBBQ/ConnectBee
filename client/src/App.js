import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Messenger from './pages/messenger/Messenger';

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
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
