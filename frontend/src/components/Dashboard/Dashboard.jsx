import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlineStar, HiOutlineChat, HiOutlineGift, HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Icons for the sidebar
import { FaGem } from "react-icons/fa"; // Gemstone icon for AI recommendations
import DashCard from "./DashCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 bg-zinc-900 h-screen p-4  shadow-xl rounded-r-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl text-yellow-600 pt-6 font-bold">SoulBuddy</h1>
        </div>

        <nav className="mt-16 text-yellow-600">
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
                <Link to="/proxy">Numerology</Link>
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

      <img src="chart.svg" alt="" />
      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-zinc-800 text-white overflow-auto ">
        {/* Conditionally Render Content Based on Active Section */}
        {activeSection === "dashboard" && (
          <div>
            <div className="relative bg-yellow-600 mb-10 p-12 rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
              {/* Banner */}
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to SoulBuddy</h2>
              <p className="text-lg text-white">Explore personalized spiritual insights, recommendations, and much more!</p>
              <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("bg.jpeg")' }}></div>
            </div>

            <div className="flex flex-wrap  gap-10 justify-center">
              <DashCard 
                icon={<HiOutlineStar size={30} />} 
                title="Horoscope Insights" 
                description="Personalized horoscope for today, tomorrow, and monthly insights." 
              />
              <DashCard 
                icon={<FaGem size={30} />} 
                title="AI Recommendations" 
                description="Get gemstone suggestions, pooja rituals, and dos & don'ts based on your horoscope." 
              />
                <DashCard
                  icon={<HiOutlineSun size={30} />}
                  title="Numerology"
                  description="Personalized numerology insights and recommendations to guide your journey."
               />

              <DashCard 
                icon={<HiOutlineChat size={30} />} 
                title="Chatbot Interaction" 
                description="Ask your spiritual questions and get instant advice from SoulBuddy." 
              />
              <DashCard 
                icon={<HiOutlineGift size={30} />} 
                title="Pooja Rituals" 
                description="Personalized pooja rituals based on your astrological profile." 
              />
              <DashCard 
                icon={<HiOutlineMoon size={30} />} 
                title="Birthstone Recommendations" 
                description="Discover gemstones that align with your birth chart and energies." 
              />
            </div>
          </div>
        )}

        {/* Other Sections - Repeating Cards for Active Sections */}
        {activeSection === "horoscope" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Kundali & Horoscope Generation</h2>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Your Horoscope</h3>
              <p>Detailed insights about your career, relationships, and personal growth.</p>
            </div>
          </div>
        )}

        {activeSection === "aiRecommendations" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Gemstones, Pooja, and More</h3>
              <p>Personalized gemstone suggestions and pooja rituals.</p>
            </div>
          </div>
        )}

        {activeSection === "spiritualContent" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Spiritual Content</h2>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Meditation & Sleep Content</h3>
              <p>Tailored meditation and sleep content based on your horoscope insights.</p>
            </div>
          </div>
        )}

        {activeSection === "chatbot" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Chatbot Interaction</h2>
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
