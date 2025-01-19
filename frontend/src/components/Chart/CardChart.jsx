import React from 'react';

const CardChart = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-zinc-800 text-yellow-700 m-4 p-6 relative transition transform hover:scale-105 hover:shadow-2xl">
      {/* Card content */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-2">{title}</h2>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default CardChart;
