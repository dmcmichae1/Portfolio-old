import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Footer from './Components/Footer';




function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact>
        <Showcase />
        
      </Route>

      <Route path="/projects">
        <Projects />
        <Footer/>
      </Route >

      <Route path="/aboutme">
        <AboutMe />
        <Footer/>
      </Route>

      <Route path="/skills">
        <Skills />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

    </Router>
  );
}

export default App;
