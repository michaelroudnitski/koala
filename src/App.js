import React from "react";
import WebNavbar from "./components/WebNavbar/WebNavbar";
import Hero from "./components/Hero/Hero";
import Dots from "./components/Misc/Dots";

import Container from "react-bootstrap/Container";
import MyWork from "./components/MyWork/MyWork";

function App() {
  return (
    <div>
      <WebNavbar />
      <Container id="app-container">
        <Dots color="#ffd400" left={0} top={360} />
        <Dots right={0} top={120} />
        <div className="row">
          <div className="col-md-6">
            <Hero />
          </div>
          <div className="col-md-6">
            <MyWork />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
