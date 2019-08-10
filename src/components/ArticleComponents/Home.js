import React from 'react';
import { Link } from "@reach/router"

const Home = () => {
  return (
    <div>
      <h1>Topics</h1>
      <Link to='/topics/football'>Football</Link>
      <Link to='/topics/coding'>Coding</Link>
      <Link to='/topics/cooking'> Cooking</Link>
    </div>
  );
}

export default Home;
