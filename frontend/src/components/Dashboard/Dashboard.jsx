import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlineStar, HiOutlineChat, HiOutlineGift, HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Optional, for icons
import { FaGem } from "react-icons/fa"; // Gemstone icon for AI recommendations

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 h-screen p-4 shadow-xl rounded-r-lg">
        <h1 className="text-2xl text-yellow-700 font-bold">SoulBuddy</h1>
        <nav className="mt-24 text-yellow-700">
          <ul className="space-y-4">
            <li className="hover:text-white">
              <Link
                to="#"
                onClick={() => setActiveSection("dashboard")}
                className={`flex items-center space-x-4 p-2 rounded-md hover:bg-yellow-700 ${activeSection === "dashboard" && "bg-yellow-700 text-white"}`}
              >
                <HiOutlineHome size={24} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="#"
                onClick={() => setActiveSection("horoscope")}
                className={`flex items-center space-x-4 p-2 rounded-md hover:bg-yellow-700 ${activeSection === "horoscope" && "bg-yellow-700 text-white"}`}
              >
                <HiOutlineStar size={24} />
                <span>Kundali & Horoscope</span>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="#"
                onClick={() => setActiveSection("aiRecommendations")}
                className={`flex items-center space-x-4 p-2 rounded-md hover:bg-yellow-700 ${activeSection === "aiRecommendations" && "bg-yellow-700 text-white"}`}
              >
                <FaGem size={24} />
                <span>AI Recommendations</span>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="#"
                onClick={() => setActiveSection("spiritualContent")}
                className={`flex items-center space-x-4 p-2 rounded-md hover:bg-yellow-700 ${activeSection === "spiritualContent" && "bg-yellow-700 text-white"}`}
              >
                <HiOutlineSun size={24} />
                <span>Spiritual Content</span>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="#"
                onClick={() => setActiveSection("chatbot")}
                className={`flex items-center space-x-4 p-2 rounded-md hover:bg-yellow-700 ${activeSection === "chatbot" && "bg-yellow-700 text-white"}`}
              >
                <HiOutlineChat size={24} />
                <span>Chatbot</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>


      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-zinc-800 text-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">Welcome to SoulBuddy</h1>
          <p className="text-lg">Explore personalized spiritual insights, recommendations, and much more.</p>
        </div>

        {/* Conditionally Render Content Based on Active Section */}
        {activeSection === "dashboard" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Dashboard</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Horoscope Insights */}
              <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">Horoscope Insights</h3>
                <p>Personalized horoscope for today, tomorrow, and monthly insights.</p>
              </div>

              {/* AI Recommendations */}
              <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">AI Recommendations</h3>
                <p>Get gemstone suggestions, pooja rituals, and dos & don'ts based on your horoscope.</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "horoscope" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Kundali & Horoscope Generation</h2>
            {/* Horoscope content */}
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Your Horoscope</h3>
              <p>Detailed insights about your career, relationships, and personal growth.</p>
            </div>
          </div>
        )}

        {activeSection === "aiRecommendations" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
            {/* Recommendations */}
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Gemstones, Pooja, and More</h3>
              <p>Personalized gemstone suggestions and pooja rituals.</p>
            </div>
          </div>
        )}

        {activeSection === "spiritualContent" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Spiritual Content</h2>
            {/* Meditation & Sleep */}
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Meditation & Sleep Content</h3>
              <p>Tailored meditation and sleep content based on your horoscope insights.</p>
            </div>
          </div>
        )}

        {activeSection === "chatbot" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Chatbot Interaction</h2>
            {/* Chatbot Interface */}
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Chatbot</h3>
              <p>Ask your spiritual questions and get instant advice from SoulBuddy.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
