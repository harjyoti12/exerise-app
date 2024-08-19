import React from "react";
import { useNavigate } from "react-router-dom";
const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${exercise.id}`);
  };

  if (!exercise) {
    return <div>No exercises available.</div>;
  }

  return (
    <div
      onClick={handleCardClick}
      className="exercise-card w-72 bg-white border-t-4 border-red-600 rounded-bl-lg p-4 transition-transform transform hover:scale-105"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full h-64 object-cover rounded"
      />
      <div className="flex mt-2 space-x-2">
        <span className="ml-2 px-4 py-1 bg-red-300 text-white text-sm rounded-full">
          {exercise.bodyPart}
        </span>
        <span className="px-4 py-1 bg-yellow-400 text-white text-sm rounded-full">
          {exercise.target}
        </span>
      </div>
      <h2 className="ml-2 mt-2 text-lg font-bold capitalize">
        {exercise.name}
      </h2>
    </div>
  );
};

export default ExerciseCard;
