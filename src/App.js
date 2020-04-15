import React from "react";
import WebNavbar from "./components/WebNavbar/WebNavbar";
import Hero from "./components/Hero/Hero";
import Dots from "./components/Misc/Dots";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <WebNavbar />
      <Container>
        <Dots color="#ffd400" left={0} top={360} />
        <Dots right={0} top={120} />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
