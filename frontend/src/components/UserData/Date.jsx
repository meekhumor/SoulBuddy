import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


const Date = () => {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate(); // Hook to navigate

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };
  
  const handleSubmit = () => {
    if (birthDate) {
      sessionStorage.setItem("birthDate", birthDate); // Store date in sessionStorage
      navigate("/time");
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-yellow-600 mb-8 text-center">
        Select Your Date of Birth
      </h2>

      <p className="text-xl text-gray-300 mb-16 text-center max-w-xl">
        Enter your date of birth below to unlock personalized insights into your love, education, career, health, and much more. Your journey begins here!
      </p>

      {/* Date Input Section */}
      <div className="flex flex-col items-center gap-6">
        <input
          type="date"
          value={birthDate}
          onChange={handleDateChange}
          className="text-xl py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-600 focus:ring-4 focus:ring-yellow-600 w-72 sm:w-96 transition-all duration-300 transform hover:scale-105"
        />
        
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Link
          to="/time"
          onClick={handleSubmit}
          className="bg-yellow-600 text-black py-3 px-8 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Date;
