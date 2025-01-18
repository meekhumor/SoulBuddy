import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-600 h-16 sticky top z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoulBuddy</h1>
        <nav>
          <a href="/#how-it-works" className="px-4 hover:underline">How It Works</a>
          <a href="/#features" className="px-4 hover:underline">Features</a>
          <Link to="/overview" className="px-4 hover:underline">Overview</Link>
          <a href="/#about" className="px-4 hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;