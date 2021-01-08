import React from 'react';
/*import logo from './logo.svg';*/
import './App.scss';
/*import Button from '@material-ui/core/Button';*/
/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Training from "./components/Training";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Projet1 from "./components/Projet1";
import Projet2 from "./components/Projet2";
import Projet3 from "./components/Projet3";
import Cv from "./components/Cv";
import Footer from "./components/Footer";



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button variant="contained" color="primary">
          Hello World
        </Button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
*/



function App() {

    /*const [currentPage, setCurrentPage] = React.useState('home');*/

    return (
        <div className="App">
            <Header/>
            {/*currentPage === 'home' && <Home></Home>*/}
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Training></Training>
            <Experiences></Experiences>
            <Projet1></Projet1>
            <Projet2></Projet2>
            <Projet3></Projet3>
            <Cv></Cv>
            <Contact></Contact>
            <Footer/>
        </div>
    );
}

export default App;