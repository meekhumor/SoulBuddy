import React from "react";


const DashCard = ({ icon, title, description, iconComponent }) => {
  return (
    <div className="bg-zinc-700 p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 relative w-full md:w-1/2 xl:w-1/3">
      <div className="absolute top-0 left-0 bg-yellow-600 p-2 rounded-br-lg text-white">
        {iconComponent}
      </div>
      <h3 className="text-xl font-semibold text-yellow-500 mb-2">{title}</h3>
      <p>{description}</p>
      <div className="absolute bottom-0 right-0 text-yellow-500 opacity-50 hover:opacity-100 transition-all">
        <span className="text-xl">↗</span>
      </div>
    </div>
  );
};

export default DashCard;
