import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    sessionStorage.setItem("gender", gender); // Store gender in sessionStorage
    navigate("/date");
  };
  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-yellow-600 mb-6 text-center">
        Select Your Gender
      </h2>

      <p className="text-xl text-gray-300 mb-12 text-center">
        Know about your love, education, health, career, and much more.
      </p>

      {/* Gender Buttons */}
      <div className="flex gap-8 mb-12">
        <button
          onClick={() => handleGenderSelection("Male")}
          className={`bg-gray-900 text-white py-3 px-10 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedGender === "Male" ? "bg-yellow-600 scale-105" : "hover:bg-yellow-600"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => handleGenderSelection("Female")}
          className={`bg-gray-900 text-white py-3 px-10 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedGender === "Female" ? "bg-yellow-600 scale-105" : "hover:bg-yellow-600"
          }`}
        >
          Female
        </button>
        <button
          onClick={() => handleGenderSelection("Other")}
          className={`bg-gray-900 text-white py-3 px-10 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedGender === "Other" ? "bg-yellow-600 scale-105" : "hover:bg-yellow-600"
          }`}
        >
          Other
        </button>
      </div>

     
    </div>
  );
};

export default Gender;
