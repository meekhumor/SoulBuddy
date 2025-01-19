import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CardChart from './CardChart';

// Sample astrology data with planets and descriptions (same as provided in your code)
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


// Zodiac images (as in your original code)
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

// Zodiac calculation logic
const getZodiacSign = (dob) => {
  const date = new Date(dob);
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth returns month index (0-11)

  const zodiacSigns = [
    { sign: "Capricorn", start: [12, 22], end: [1, 19] },
    { sign: "Aquarius", start: [1, 20], end: [2, 18] },
    { sign: "Pisces", start: [2, 19], end: [3, 20] },
    { sign: "Aries", start: [3, 21], end: [4, 19] },
    { sign: "Taurus", start: [4, 20], end: [5, 20] },
    { sign: "Gemini", start: [5, 21], end: [6, 20] },
    { sign: "Cancer", start: [6, 21], end: [7, 22] },
    { sign: "Leo", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", start: [8, 23], end: [9, 22] },
    { sign: "Libra", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio", start: [10, 23], end: [11, 21] },
    { sign: "Sagittarius", start: [11, 22], end: [12, 21] },
  ];

  for (let i = 0; i < zodiacSigns.length; i++) {
    const { sign, start, end } = zodiacSigns[i];
    if (
      (month === start[0] && day >= start[1]) ||
      (month === end[0] && day <= end[1]) ||
      (month > start[0] && month < end[0])
    ) {
      return sign;
    }
  }
  return "Unknown";
};

const Chart = () => {
  const [zodiacSign, setZodiacSign] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const birthDate = sessionStorage.getItem("birthDate");
    if (birthDate) {
      const sign = getZodiacSign(birthDate);
      setZodiacSign(sign);
    }
  }, []);

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center p-8 max-w-6xl mx-auto bg-zinc-900 my-12 rounded-lg">
      <div className="flex items-center mb-8 bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 rounded-lg shadow-lg">
        <img
          src={zodiac[zodiacSign]?.image}
          alt={zodiac[zodiacSign]?.name}
          className="w-24 h-24 mr-6 rounded-full border-4 border-yellow-500 shadow-lg"
        />
        <h2 className="text-4xl text-white font-bold">{zodiac[zodiacSign]?.name}</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(astrologyData).map(([planet, description]) => (
          <CardChart
            key={planet}
            title={planet}
            description={description}
          />
        ))}
      </div>

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
