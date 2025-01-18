import React, { useState } from "react";
import axios from "axios";

const BirthChart = () => {
  const [birthData, setBirthData] = useState({
    day: 6,
    month: 1,
    year: 2000,
    hour: 7,
    min: 45,
    lat: 19.132,
    lon: 72.342,
    tzone: 5.5,
  });

  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const userId = "636910";
  const apiKey = "fac1ae6b138f953dd1c29e9b66c67d3996dd53ad";
  const language = "en"; // You can change this to any language code if needed

  const handleSubmit = async () => {
    const api = "horo_chart/:chart_id";
    const auth = "Basic " + btoa(`${userId}:${apiKey}`);
    const requestData = {
      day: birthData.day,
      month: birthData.month,
      year: birthData.year,
      hour: birthData.hour,
      min: birthData.min,
      lat: birthData.lat,
      lon: birthData.lon,
      tzone: birthData.tzone,
    };

    try {
      const response = await axios.post(`https://json.astrologyapi.com/v1/${api}`, requestData, {
        headers: {
          authorization: auth,
          "Content-Type": "application/json",
          "Accept-Language": language,
        },
      });
      setChartData(response.data); // Set the chart data in the state
    } catch (err) {
      setError("Error fetching birth chart. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24 relative">
      <h2 className="text-5xl font-bold text-yellow-700 mb-8 text-center">Generate Your Birth Chart</h2>

      {/* Input fields for birth data */}
      <div className="flex flex-col items-center gap-6 w-72 sm:w-96 mb-12">
        <input
          type="number"
          placeholder="Day"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.day}
          onChange={(e) => setBirthData({ ...birthData, day: e.target.value })}
        />
        <input
          type="number"
          placeholder="Month"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.month}
          onChange={(e) => setBirthData({ ...birthData, month: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.year}
          onChange={(e) => setBirthData({ ...birthData, year: e.target.value })}
        />
        <input
          type="number"
          placeholder="Hour"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.hour}
          onChange={(e) => setBirthData({ ...birthData, hour: e.target.value })}
        />
        <input
          type="number"
          placeholder="Minute"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.min}
          onChange={(e) => setBirthData({ ...birthData, min: e.target.value })}
        />
        <input
          type="number"
          placeholder="Latitude"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.lat}
          onChange={(e) => setBirthData({ ...birthData, lat: e.target.value })}
        />
        <input
          type="number"
          placeholder="Longitude"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.lon}
          onChange={(e) => setBirthData({ ...birthData, lon: e.target.value })}
        />
        <input
          type="number"
          placeholder="Timezone"
          className="py-3 px-6 rounded-lg bg-gray-900 text-white border-2 border-yellow-700"
          value={birthData.tzone}
          onChange={(e) => setBirthData({ ...birthData, tzone: e.target.value })}
        />
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="bg-yellow-700 text-black py-3 px-8 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600"
      >
        Generate Birth Chart
      </button>

      {/* Display error or result */}
      {error && <p className="text-red-500 mt-6">{error}</p>}
      {chartData && (
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Your Birth Chart</h3>
          <pre className="text-gray-300">{JSON.stringify(chartData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BirthChart;
