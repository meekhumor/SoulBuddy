import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const ProxyRequest = () => {
  const [name, setName] = useState(""); // User-provided name
  const [responseData, setResponseData] = useState(null); // API response
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [birthDate, setBirthDate] = useState(""); // Retrieved birthDate

  useEffect(() => {
    // Retrieve birthDate from sessionStorage
    const storedBirthDate = sessionStorage.getItem("birthDate");
    if (storedBirthDate) {
      setBirthDate(storedBirthDate);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);
    setError(null);

    try {
      // Send a POST request to the proxy endpoint in Django
      const response = await fetch("http://127.0.0.1:8000/api/proxy/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, // Pass the user-provided name
          birth_date: birthDate, // Include the retrieved birthDate
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        setResponseData(data.outputs[0].outputs[0].artifacts.message); // Set the response
        console.log(data);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (err) {
      setError(err.message); // Set the error
    } finally {
      setLoading(false); // Turn off loading
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-yellow-600">
      <h1 className="text-4xl font-semibold mb-8">Numerology Insights</h1>

      {/* Display the birth date */}
      {birthDate && (
        <div className="text-lg mb-4 text-gray-400">
          <strong>Birth Date:</strong> {birthDate}
        </div>
      )}

      {/* Form container */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <input
            className="w-full p-4 mb-6 border border-gray-500 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            className="bg-yellow-600 text-black px-8 py-3 rounded-full hover:bg-yellow-500 focus:outline-none transition duration-300"
            disabled={loading || !name}
          >
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 text-red-500 font-semibold">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Display response data */}
      {responseData && (
        <div className="mt-6 w-full max-w-3xl p-8 bg-gray-800 border border-gray-600 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">Numerology Reading</h2>
          <div className="prose prose-yellow text-white">
            <ReactMarkdown>{responseData}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProxyRequest;
