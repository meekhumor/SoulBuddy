import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-zinc-300 p-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl text-yellow-600 font-bold">
          SoulBuddy
        </h1>
        {/* Navigation Links */}
        <nav className="flex gap-8">
          <a href="/#how-it-works" className="text-lg hover:underline text-zinc-300">How It Works</a>
          <a href="/#features" className="text-lg hover:underline text-zinc-300">Features</a>
          <Link to="/overview" className="text-lg hover:underline text-zinc-300">Overview</Link>
          <a href="/#about" className="text-lg hover:underline text-zinc-300">About</a>
        </nav>
        {/* Login Button */}
        <Link to="/login" className="bg-yellow-600 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-500 transition duration-300">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
