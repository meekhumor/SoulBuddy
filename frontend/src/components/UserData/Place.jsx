import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Place = () => {
  const [location, setLocation] = useState(""); // Store the location input
  const navigate = useNavigate(); // Hook to navigate

  // Retrieve the values passed from previous pages
  const gender = sessionStorage.getItem("gender");
  const birthDate = sessionStorage.getItem("birthDate");
  const time = sessionStorage.getItem("time");

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location when the input changes
  };

  const handleSubmit = () => {
    if (location) {
      // Store the location in sessionStorage to be accessed on the next page
      sessionStorage.setItem("place", location);

      // Navigate to the verify page and pass the state
      navigate("/verify", {
        state: { gender, birthDate, time, place: location },
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-yellow-600 mb-8 text-center">
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
          className="text-xl py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-600 focus:ring-4 focus:ring-yellow-600 w-72 sm:w-96 transition-all duration-300 transform hover:scale-105"
        />
        
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="bg-yellow-600 text-black py-3 px-8 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Place;
