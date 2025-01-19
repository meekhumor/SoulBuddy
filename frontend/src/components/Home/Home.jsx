import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24">
        <h1 className="text-5xl font-bold text-yellow-600 mb-8">
          Want Your Personalized Kundli / Birth Chart Reading?
        </h1>
        <h2 className="text-3xl font-semibold text-zinc-300 mb-6">
          Get Your Own AI Astrologer
        </h2>
        <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto">
          Get clarity on Love, Education, Career, Health, and more with our SoulBuddy.
        </p>
        <Link to="/gender" className="bg-yellow-600 text-lg font-bold text-black py-4 px-10 rounded-lg hover:bg-yellow-700 transition">
          Start Your Journey with FREE Birth Chart Analysis
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-semibold text-center text-yellow-600 mb-12">
          THE MOST ADVANCED AI ASTROLOGY SERVICE
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          <div className="bg-zinc-900 py-8 shadow-lg rounded-lg p-6 max-w-xs text-center transform hover:scale-105 transition duration-300">
            <img
              src="kundli1.jpeg"
              alt="Instant AI Answers"
              className="w-48 h-40 object-cover rounded-lg mb-8 mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Instant AI Answers</h3>
            <p className="text-zinc-300 text-base">Ask your AI Astrologer for instant insights into your life and future.</p>
          </div>
          <div className="bg-zinc-900 py-8 shadow-lg rounded-lg p-6 max-w-xs text-center transform hover:scale-105 transition duration-300">
            <img
              src="kundli2.jpeg"
              alt="Kundli Generation"
              className="w-48 h-40 object-cover rounded-lg mb-8 mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Kundli Generation</h3>
            <p className="text-zinc-300 text-base">Get your personalized birth chart (Kundli) generated instantly with Vedic precision.</p>
          </div>
          <div className="bg-zinc-900 py-8 shadow-lg rounded-lg p-6 max-w-xs text-center transform hover:scale-105 transition duration-300">
            <img
              src="kundli3.jpeg"
              alt="AI-Driven Astrology"
              className="w-48 h-40 object-cover rounded-lg mb-8 mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">AI-Driven Astrology</h3>
            <p className="text-zinc-300 text-base">Leverage the power of AI to decode your astrological patterns and life path.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-yellow-600 text-black py-4 px-10 rounded-lg hover:bg-yellow-600 transition">
            Ask Your AI Astrologer Now
          </button>
        </div>
      </section>

      {/* Additional Section for Spacing */}
      <section className="py-16">
        <h2 className="text-4xl font-semibold text-center text-yellow-600 mb-12">
          Discover Your Cosmic Path
        </h2>
        <div className="flex justify-center">
          <img
            src="cosmic.jpeg"
            alt="Astrology"
            className="w-full max-w-lg rounded-lg mb-8 hover:scale-105"
          />
        </div>
        <p className="text-center text-zinc-300 text-xl mb-10 max-w-2xl mx-auto">
          Ready to explore the stars? Let our AI Astrologer guide you through your life's journey with personalized astrology insights.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-700 text-black py-4 px-10 rounded-lg hover:bg-yellow-600 transition">
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
