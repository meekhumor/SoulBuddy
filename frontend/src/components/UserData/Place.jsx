import React, { useState } from "react";
import { Link } from "react-router-dom";

const Place = () => {
  const [location, setLocation] = useState(""); // Store the location input

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location when the input changes
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-yellow-700 mb-8 text-center">
        Enter Your Birth Location
      </h2>

      <p className="text-xl text-gray-300 mb-16 text-center max-w-xl">
        Please enter the city or place of your birth to complete your profile.
      </p>

      {/* Location Input Section */}
      <div className="flex flex-col items-center gap-6">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter your birth location"
          className="text-xl py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700 focus:ring-4 focus:ring-yellow-700 w-72 sm:w-96 transition-all duration-300 transform hover:scale-105"
        />
        
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Link
          to="/verify" // Navigate to dashboard or any other page after submitting
          className="bg-yellow-700 text-black py-3 px-8 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Place;
