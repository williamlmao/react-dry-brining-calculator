import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="logo">Salt Your Meat</h1>
      <nav>
        <Link to="/">Calculator</Link>
        <Link to="/faq">FAQs</Link>
        <a href="/#about">About</a>
        <a href="https://forms.gle/ZLV7JedngoPpsyc29">Feedback</a>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
