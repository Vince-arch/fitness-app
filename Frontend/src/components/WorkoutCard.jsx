import React from 'react'

const WorkoutCard = ({ title, duration, image, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-72">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-500">Duration: {duration} mins</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
        Start Workout
      </button>
    </div>
  );
};

export default WorkoutCard;