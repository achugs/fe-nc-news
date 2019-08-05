import React from 'react';
import Header from './components/Header'
import './App.css';
import NavBar from './components/NavBar'
import { Router } from "@reach/router"
import Home from './components/Home';
import Articles from './components/Articles'
// import Topics from './components/Topics';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        < Home path="/" />
        < Articles path="/articles" />
        {/* < Topics path="/topics" /> */}
      </Router>

    </div>
  );
}

export default App;
