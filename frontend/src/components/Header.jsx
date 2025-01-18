import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-zinc-900 text-zinc-500 p-4 sticky top z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-yellow-700 font-bold">SoulBuddy</h1>
        <nav>
          <a href="/#how-it-works" className="px-4 hover:underline">How It Works</a>
          <a href="/#features" className="px-4 hover:underline">Features</a>
          <Link to="/overview" className="px-4 hover:underline">Overview</Link>
          <a href="/#about" className="px-4 hover:underline">About</a>
        </nav>
        <Link className='text-black bg-yellow-700 py-2 rounded-full px-4'>Login</Link>
      </div>
    </header>
  );
};

export default Header;