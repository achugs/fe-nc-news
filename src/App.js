import React from 'react';
import './App.css';
import Header from './components/EveryPageComponents/Header'
import NavBar from './components/EveryPageComponents/NavBar'
import { Router } from "@reach/router"
import Home from './components/ArticleComponents/Home'
import Articles from './components/ArticleComponents/Articles'
import ArticleCard from './components/ArticleComponents/ArticleCard'
import ErrorHandlingDisplay from './ErrorHandlingDisplay';
import ArticleComments from './components/ArticleComponents/ArticleComments';
// import Topics from "./components/TopicComponents/Topics";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      {<Router>
        < Home path="/" />
        < Articles path="/articles" />
        <ArticleCard path="/articles/:id" />
        <ErrorHandlingDisplay default status='404' msg='page not found' />
        <ArticleComments path="/articles/:id/comments" />
        <Articles path="/topics/:topic" />
      </Router>}

    </div>
  );
}

export default App;
