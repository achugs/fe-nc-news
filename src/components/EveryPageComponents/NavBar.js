import React from 'react';
import { Link } from "@reach/router"

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/topics/football"> Football</Link>
      <Link to="/topics/coding"> Coding</Link>
      <Link to="/topics/cooking"> Cooking</Link>
    </div>
  );
};

export default NavBar;