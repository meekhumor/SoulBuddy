import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24">
        <h1 className="text-5xl font-bold text-yellow-700 mb-6">
          Want Your Personalized Kundli / Birth Chart Reading?
        </h1>
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">
          Get Your Own AI Astrologer
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Get clarity on Love, Education, Career, Health, and more with our SoulBuddy.
        </p>
        <Link to="/gender" className="bg-yellow-700 text-black py-3 px-8 rounded-lg hover:bg-yellow-600 transition">
          Start Your Journey with FREE Birth Chart Analysis
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-yellow-700 mb-12">
          THE MOST ADVANCED AI ASTROLOGY SERVICE
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Instant AI Answers"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">Instant AI Answers</h3>
            <p className="text-gray-300">Ask your AI Astrologer for instant insights into your life and future.</p>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Kundli Generation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">Kundli Generation</h3>
            <p className="text-gray-300">Get your personalized birth chart (Kundli) generated instantly with Vedic precision.</p>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="AI-Driven Astrology"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">AI-Driven Astrology</h3>
            <p className="text-gray-300">Leverage the power of AI to decode your astrological patterns and life path.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-700 text-black py-3 px-8 rounded-lg hover:bg-yellow-600 transition">
            Ask Your AI Astrologer Now
          </button>
        </div>
      </section>

      {/* Additional Section for Spacing */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-yellow-700 mb-12">
          Discover Your Cosmic Path
        </h2>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Astrology"
            className="w-full max-w-lg rounded-lg mb-8"
          />
        </div>
        <p className="text-center text-gray-300 mb-8">
          Ready to explore the stars? Let our AI Astrologer guide you through your life's journey with personalized astrology insights.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-700 text-black py-3 px-8 rounded-lg hover:bg-yellow-600 transition">
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
