import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

const Verify = () => {
  const [userData, setUserData] = useState({
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    location: '',
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    // Retrieve data from sessionStorage
    const gender = sessionStorage.getItem('gender');
    const dateOfBirth = sessionStorage.getItem('birthDate');
    const timeOfBirth = sessionStorage.getItem('timeOfBirth');
    const location = sessionStorage.getItem('place');

    if (gender && dateOfBirth && timeOfBirth && location) {
      setUserData({ gender, dateOfBirth, timeOfBirth, location });
    }
  }, []);

  const handleSubmit = () => {
    // Simply navigate to the /birthchart route without alert
    navigate('/birthchart');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-yellow-700 mb-8 text-center animate__animated animate__fadeIn">
        Verify Your Information
      </h2>

      <p className="text-xl text-gray-300 mb-16 text-center max-w-xl animate__animated animate__fadeIn animate__delay-1s">
        Please review your details below before proceeding further. Ensure everything is correct!
      </p>

      {/* Display User Data */}
      <div className="text-xl text-gray-300 mb-8 text-center max-w-xl">
        <p className="mb-4"><strong className="text-yellow-700">Gender:</strong> {userData.gender}</p>
        <p className="mb-4"><strong className="text-yellow-700">Date of Birth:</strong> {userData.dateOfBirth}</p>
        <p className="mb-4"><strong className="text-yellow-700">Time of Birth:</strong> {userData.timeOfBirth}</p>
        <p className="mb-4"><strong className="text-yellow-700">Location:</strong> {userData.location}</p>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="bg-yellow-700 text-black py-3 px-12 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600 animate__animated animate__fadeIn animate__delay-2s"
        >
          Submit & Get Your Insights
        </button>
      </div>
    </div>
  );
};

export default Verify;
