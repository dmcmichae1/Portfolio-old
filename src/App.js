import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Personality from './Components/Personality';



function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact>
        <Showcase />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route >

      <Route path="/aboutme">
        <AboutMe />
      </Route>

      <Route path="/skills">
        <Skills />
      </Route>

      <Route path="/personality">
        <Personality />
      </Route>

    </Router>
  );
}

export default App;
