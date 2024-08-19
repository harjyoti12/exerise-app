import React, { useContext, useState, useEffect } from "react";
import { ExerciseContext } from "../../Context/ExerciseContext";
import {
  model1,
  model2,
  model4,
  model5,
  model6,
  model7,
  model8,
  model9,
  model10,
  model11,
} from "../All Images/Index"; // Import your models here

const Programs = () => {
  const { exercises } = useContext(ExerciseContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredExercises(exercises.slice(0, 5)); // Show only 5 instructions if available
    } else {
      const filtered = exercises.filter(
        (exercise) => exercise.bodyPart.toLowerCase() === selectedCategory
      );
      setFilteredExercises(filtered.slice(0, 5)); // Show only 5 instructions
    }
  }, [selectedCategory, exercises]);

  const categories = [
    "all",
    ...new Set(exercises.map((exercise) => exercise.bodyPart.toLowerCase())),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Define image mapping for categories
  const imageMapping = {
    all: model1,
    waist: model2,
    "upper legs": model4,
    back: model5,
    "lower legs": model6,
    chest: model7,
    "upper arms": model8,
    cardio: model9,
    shoulders: model10,
    "lower arms": model11,
  };

  // Determine the image to display based on the selected category
  const displayedImage = imageMapping[selectedCategory] || model1;

  return (
    <div className="w-full p-10 bg-[#0C0C0C]">
      <div className="w-full h-[15vh]  flex items-center justify-center flex-col p-10 overflow-hidden">
        <h1
          className="mb-6 mt-4 text-center text-white font-[head2] text-[1.6rem] max-sm:text-[1rem]"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          FITNESS PROGRAM PROFLEX FITNESS
        </h1>
        <ul
          className="flex items-center justify-center gap-10 text-white font-[head2] text-[1.2rem] cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "underline" : ""}
            >
              {category.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-[#0C0C0C] flex flex-row p-10">
        <div
          className="w-[40vw] h-[50vh] flex items-center justify-center max-sm:flex-row "
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="w-[30vw] h-[60vh] mt-36 bg-[#E4003A] rounded-[50%] relative overflow-hidden ">
            <img
              className="absolute top-0  object-cover object-center"
              src={displayedImage}
              alt=""
              data-aos="fade-down"
              data-aos-duration="1500"
            />
          </div>
        </div> 
        <div className="flex w-[50vw] overflow-hidden  flex-col items-start justify-center p-10">
          <h1
            className="text-white text-[2rem] font-[head] ml-10"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            {selectedCategory === "all"
              ? "PROGRAM DETAILS"
              : `${selectedCategory.toUpperCase()} TRAINING`}
          </h1>
          <ol
            className="text-white overflow-auto hide h-[50vh] flex flex-col justify-start items-start ml-4 gap-4 p-6"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise, index) => (
                <li key={index}>{exercise.instructions}</li>
              ))
            ) : (
              <li>No exercises available for this category.</li>
            )}
          </ol>
          <button
            className="text-white rounded-full mt-6 px-6 py-3 ml-10 font-[head3] bg-[#E4003A]"
           
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
