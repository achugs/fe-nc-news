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



class App extends React.Component {
  state = {
    username: "jessjelly"
  }

  render() {
    const { username } = this.state
    return (
      <div  >
        <Header username={username} />
        <NavBar />
        {<Router>
          < Home path="/" />
          < Articles path="/articles" />
          < ArticleCard path="/articles/:id" username={username} />
          < ErrorHandlingDisplay default status='404' msg='page not found' />
          < ArticleComments path="/articles/:id" />
          < Articles path="/topics/:topic" />
        </Router >}

      </div >
    );
  }

}

export default App;
