import React from 'react';
import Header from './components/EveryPageComponents/Header'
import './App.css';
import NavBar from './components/EveryPageComponents/NavBar'
import { Router } from "@reach/router"
import Home from './components/ArticleComponents/Home';
import Articles from './components/ArticleComponents/Articles'
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
