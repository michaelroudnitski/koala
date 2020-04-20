import React from "react";
import Container from "react-bootstrap/Container";
import Dots from "./components/Misc/Dots";

import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import MySkills from "./components/MySkills/MySkills";
import Resume from "./components/Resume/Resume";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Container id="app-container">
        <Dots color="#ffd400" left={0} top={290} />
        <Dots right={0} top={120} />
        <div className="row">
          <div className="col-md-6">
            <Hero />
          </div>
          <div className="col-md-6 mt-auto">
            <MyWork />
          </div>
          <div className="col-md-12">
            <MySkills />
          </div>
          <div className="col-md-6">
            <Resume />
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
