// NewsCard.js
import React from 'react';

const NewsCard = ({title, shortdesc, date }) => {
  return (
    <div
      className=" p-6 rounded-lg shadow-md border-teal-400 border bg-GreenMist bg-opacity-60"
    >
      <h2 className="text-3xl text-teal-700 font-semibold mb-2">{title}</h2>
      <p className="text-teal-700 mb-4">{shortdesc}</p>
      <p className="text-gray-400 text-sm ">{date}</p>
    </div>
  );
};

export default NewsCard;
