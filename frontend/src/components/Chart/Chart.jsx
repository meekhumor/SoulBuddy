import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CardChart from './CardChart';

const zodiac = {
  Aries: { name: "Aries", image: "aries.jpeg" },
  Taurus: { name: "Taurus", image: "taurus.jpeg" },
  Gemini: { name: "Gemini", image: "gemini.jpeg" },
  Cancer: { name: "Cancer", image: "cancer.jpeg" },
  Leo: { name: "Leo", image: "leo.jpeg" },
  Virgo: { name: "Virgo", image: "virgo.jpeg" },
  Libra: { name: "Libra", image: "libra.jpeg" },
  Scorpio: { name: "Scorpio", image: "scorpio.jpeg" },
  Sagittarius: { name: "Sagittarius", image: "saggitaraus.jpeg" },
  Capricorn: { name: "Capricorn", image: "capricon.jpeg" },
  Aquarius: { name: "Aquarius", image: "aquarius.jpeg" },
  Pisces: { name: "Pisces", image: "pisces.jpeg" }
};

// Sample astrology data with planets and descriptions
const astrologyData = {
  Sun: "The Sun in Scorpio intensifies emotions and desires. This placement creates a strong will, a magnetic personality, and a deep interest in transformative experiences.",
  Mercury: "Mercury in Scorpio gives a penetrating and analytical mind. These individuals are adept at research, investigation, and uncovering hidden information.",
  Rahu: "Rahu in Aries amplifies the assertive and pioneering qualities of this sign. This placement can lead to a strong desire for independence, a competitive spirit, and a tendency to act impulsively.",
  Saturn: "Saturn in Cancer can create emotional reserve and a sense of responsibility towards family and home. These individuals may have experienced early challenges related to security and nurturing.",
  Jupiter: "Jupiter in Virgo brings a practical and analytical approach to expansion and growth. These individuals are detail-oriented and strive for perfection in their work and service to others.",
  Moon: "The Moon in Libra seeks harmony and balance in relationships. These individuals are diplomatic and peace-loving, with a strong desire for companionship.",
  Mars: "Mars in Libra can create some internal conflict, as the assertive energy of Mars is tempered by Libra's desire for harmony. These individuals may struggle with assertiveness and decision-making.",
  Venus: "Venus is at home in Libra, enhancing its qualities of love, beauty, and harmony. These individuals have a refined aesthetic sense and a natural charm.",
  Ketu: "Ketu in Libra can create a sense of detachment from relationships or a spiritual seeking through partnerships. These individuals may have karmic lessons to learn about balance and fairness."
};

const Chart = () => {
  const zodiacElement = "Aries"; // Example, you can dynamically pass it if needed

  const navigate = useNavigate(); // Hook to navigate to a different page

  const handleNavigateToDashboard = () => {
    navigate('/dashboard'); // Navigates to the /dashboard route
  };

  return (
    <div className="flex flex-col justify-center p-8 max-w-6xl mx-auto bg-zinc-900 my-12 rounded-lg">
      {/* Zodiac Element at the top-left */}
      <div className="flex items-center mb-8 bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 rounded-lg shadow-lg">
        <img
          src={zodiac[zodiacElement].image}
          alt={zodiac[zodiacElement].name}
          className="w-24 h-24 mr-6 rounded-full border-4 border-yellow-500 shadow-lg"
        />
        <h2 className="text-4xl text-white font-bold">{zodiac[zodiacElement].name}</h2>
      </div>

      {/* Grid layout for planet cards */}
      <div className="grid grid-cols-3 gap-6">
        {/* Map through astrology data and render CardChart */}
        {Object.entries(astrologyData).map(([planet, description]) => (
          <CardChart
            key={planet}
            title={planet}
            description={description}
          />
        ))}
      </div>

      {/* Button to navigate to the dashboard */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleNavigateToDashboard}
          className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Chart;
