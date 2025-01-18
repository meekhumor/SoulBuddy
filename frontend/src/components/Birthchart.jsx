import React, { useState, useEffect } from "react";
import axios from "axios";

function convertToJSON(inputText) {
  const lines = inputText.split("\n").filter(line => line.trim() !== ""); // Split and filter empty lines
  const result = {};
  
  let currentKey = null;
  let currentDescription = [];

  for (let line of lines) {
    // Match planet header lines using a regular expression
    const match = line.match(/^\*\*([A-Za-z]+).*:\*\*/);

    if (match) {
      if (currentKey) {
        // Save the previous planet and its description
        result[currentKey] = currentDescription.join(" ").trim();
      }

      currentKey = match[1]; // Extract the planet name
      currentDescription = [line.replace(match[0], "").trim()]; // Start collecting description
    } else if (currentKey) {
      // Append additional lines to the current planet description
      currentDescription.push(line.trim());
    }
  }

  // Add the last planet to the result
  if (currentKey) {
    result[currentKey] = currentDescription.join(" ").trim();
  }

  return result;
}

const LangflowComponent = ({ inputValue }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [convertedJSON, setConvertedJSON] = useState(null);

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

      // Convert the response message to JSON
      const message = data.outputs[0].outputs[0].artifacts.message;
      const jsonResult = convertToJSON(message);
      setConvertedJSON(jsonResult); // Store the converted JSON
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
      {convertedJSON && (
        <div style={{ marginTop: "20px", color: "white" }}>
          <h3>Converted JSON:</h3>
          <pre>{JSON.stringify(convertedJSON, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const BirthChart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = "636910";
  const apiKey = "fac1ae6b138f953dd1c29e9b66c67d3996dd53ad";
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
