import React, { useState } from "react";
import axios from "axios";

const Gems = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    user_input: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
        const res = await axios.post("http://127.0.0.1:8000/handle-langflow-request/", formData);
      setResponse(res.data);
    } catch (err) {
      setError(err.response ? err.response.data : "An error occurred");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Langflow Astrology Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Time of Birth:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Place of Birth:</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Your Query:</label>
          <textarea
            name="user_input"
            value={formData.user_input}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-green-700 rounded-lg">
          <h2 className="text-lg font-bold">Response:</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-700 rounded-lg">
          <h2 className="text-lg font-bold">Error:</h2>
          <p>{typeof error === 'object' ? JSON.stringify(error) : error}</p>
        </div>
      )}
    </div>
  );
};

export default Gems;
