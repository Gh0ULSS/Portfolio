import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./Global_Components/Header.jsx";
import Footer from "./Global_Components/Footer.jsx";

import Home from "./Views/Home.jsx";
import About from "./Views/About.jsx";
import Projects from "./Views/Projects.jsx";
import CV from "./Views/CV.jsx";
import Reachout from "./Views/Reachout.jsx";
import Experience from './Views/Experience.jsx';
import Shellterm from './Views/Shellterm.jsx';


function App() {
  return (
      <div id="main">
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        <CV />
        <Reachout />
        <Footer /> 
      </div>
  );
}

/*
function App() {
  return (
    <div id="main">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <CV />
      <Reachout />
      <Footer /> 
    </div>
  );
}
*/

export default App;
