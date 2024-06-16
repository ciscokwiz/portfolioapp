import './App.css';
import React, {useState} from 'react';
import heroimage from './aqua3.jpeg';
import linkedinimage from './icons8-linkedin-96.svg';
import githubimage from './icons8-github-96.svg';
import {Routes, Route, Link} from 'react-router-dom';



function Header(){
  
  return(
    <header className="App-header">
      <nav className="navHeader">
        <h3 className="logo">Cisco.dev</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>

        </ul>
      </nav>
    </header>
  );
}

const Home = () => {
  return ( 
    <section className="hero" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <p>Hi, I'm Kosisochukwu Ikezogwo. A passionate Front-end React Developer based in Lagos, Nigeria. 📍</p>
              <span>

                <a href="">
                  <img className="herotext-img" src={linkedinimage} alt=""></img>
                </a>
                <a href="">
                  <img className="herotext-img" src={githubimage} alt=""></img>
                </a>
              </span>
            </div>
            <div className="hero-img">
              <img className="imgg" src={heroimage} alt="fff"></img>
            </div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"></img>
                </li>
                <li>
                <img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon"></img>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
const Main = ()=>{
  return(
    <div>
      <h1>
        This page is my first attempt at a react page without guidance
      </h1>
      <h2>
        For context i really do not code
      </h2>
      
    </div>
  );
};

const CopyHeader = (props) => {
  return(
    <h1>{props.message}</h1>
  )
}

<nav className='nav-bar' id='nav-menu'>
  <link to='/homepage' className='nav'>
    Homepage
  </link>
</nav>



export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
};




