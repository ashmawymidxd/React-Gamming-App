import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Profile ,Browes,Details,Streams} from "./Pages";
import { Header, Footer } from "./sections";
import { Container } from "./Components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<Browes/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/streams" element={<Streams/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
