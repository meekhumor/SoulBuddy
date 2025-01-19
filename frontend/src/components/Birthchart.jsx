import React, { useState, useEffect } from "react";
import axios from "axios";

const LangflowComponent = ({ inputValue }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError(null); // Reset error state before the new request
    setLoading(true); // Start loading

    try {
      const res = await fetch("http://127.0.0.1:8000/api/langflow/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          input_value: inputValue,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data); // Update response state with API response
      console.log("Langflow Response:", data); // Log response to the console
    } catch (err) {
      setError(err.message); // Set error state if an error occurs
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (inputValue) {
      handleSubmit();
    }
  }, [inputValue]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

const BirthChart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = "636912";
  const apiKey = "14be15209abb47619164fdd965f48211a9963894";
  const language = "en"; // You can change this to any language code if needed

  // Retrieve data from sessionStorage
  const gender = sessionStorage.getItem("gender"); // "Male"
  const dateOfBirth = sessionStorage.getItem("birthDate"); // "2004-12-09"
  const timeOfBirth = sessionStorage.getItem("timeOfBirth"); // "07:05"
  const location = sessionStorage.getItem("place"); // "Allahabad"

  // Extract date components
  const [year, month, day] = dateOfBirth.split("-");

  // Convert time to hour and minute
  const [hour, min] = timeOfBirth.split(":");

  // Placeholder latitude and longitude for Allahabad
  const lat = 25.4358; // Example coordinates for Allahabad
  const lon = 81.8463;
  const tzone = 5.5; // Example timezone for India

  // Function to fetch birth chart data
  const fetchBirthChart = async () => {
    const api = "horo_chart/:chart_id";
    const auth = "Basic " + btoa(`${userId}:${apiKey}`);
    const requestData = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      lat: lat,
      lon: lon,
      tzone: tzone,
    };

    setLoading(true); // Start loading
    try {
      const response = await axios.post(`https://json.astrologyapi.com/v1/${api}`, requestData, {
        headers: {
          authorization: auth,
          "Content-Type": "application/json",
          "Accept-Language": language,
        },
      });
      setChartData(response.data); // Set the chart data in the state
      console.log("Birth Chart Data:", response.data); // Log response to the console
    } catch (err) {
      setError("Error fetching birth chart. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Call the function to fetch the birth chart on component mount
  useEffect(() => {
    fetchBirthChart();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24 relative">
      <h2 className="text-5xl font-bold text-yellow-700 mb-8 text-center">Generate Your Birth Chart</h2>

      {/* Display the user's data */}
      <div className="text-xl text-gray-300 mb-12 text-center">
        <p>
          <strong className="text-yellow-700">Gender:</strong> {gender}
        </p>
        <p>
          <strong className="text-yellow-700">Date of Birth:</strong> {dateOfBirth}
        </p>
        <p>
          <strong className="text-yellow-700">Time of Birth:</strong> {timeOfBirth}
        </p>
        <p>
          <strong className="text-yellow-700">Location:</strong> {location}
        </p>
      </div>

      {loading && <p>Loading...</p>}

      {/* Display Langflow response */}
      {chartData && <LangflowComponent inputValue={JSON.stringify(chartData)} />}

      {/* Display error or result */}
      {error && <p className="text-red-500 mt-6">{error}</p>}
    </div>
  );
};

export default BirthChart;
