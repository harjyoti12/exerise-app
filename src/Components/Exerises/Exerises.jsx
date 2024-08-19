import React, { useContext, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ExerciseContext } from "../../Context/ExerciseContext";
import ExerciseCard from "./ExerisesCard";
import "aos/dist/aos.css";
import { model1, model2, model3,model4,model5,model6,model7,model8,model9,model10,model11 } from "../All Images/Index";
import CardLoading from '../Loading/CardLoading'

const Exercises = () => {
  const { exercises, loading, error } = useContext(ExerciseContext);
  const [bodyParts, setBodyParts] = useState([]);
  const [visibleExercises, setVisibleExercises] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const resultsRef = useRef(null);

  useEffect(() => {
    const uniqueBodyParts = [
      "all",
      ...new Set(exercises.map((exercise) => exercise.bodyPart.toLowerCase())),
    ];
    setBodyParts(uniqueBodyParts);
  }, [exercises]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setSelectedCategory(""); // Reset the selected category when searching
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToResults();
    setSearchTerm(""); // Reset the search term when clicking a category
  };

  const handleSearchClick = () => {
    scrollToResults();
  };

  const scrollToResults = () => {
    if (resultsRef.current) {
      const offset = -50; // Adjust this value to ensure proper visibility
      const topPosition = resultsRef.current.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  const filteredExercises = exercises.filter((exercise) => {
    if (selectedCategory && selectedCategory !== "all") {
      return exercise.bodyPart.toLowerCase() === selectedCategory;
    }
    if (searchTerm) {
      return (
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.bodyPart.toLowerCase().includes(searchTerm) ||
        exercise.equipment.toLowerCase().includes(searchTerm) ||
        exercise.target.toLowerCase().includes(searchTerm)
      );
    }
    return true;
  });

  const loadMoreExercises = () => {
    setVisibleExercises((prev) => prev + 8);
  };

  const getModelForBodyPart = (bodyPart) => {
    if (bodyPart === "all") {
      return model1;
    } else if (bodyPart === "waist") {
      return model2;
    } else if (bodyPart === "upper legs") {
      return model4;
    } else if (bodyPart === "back") {
      return model5;
    } else if (bodyPart === "lower legs") {
      return model6;
    } else if (bodyPart === "chest") {
      return model7;
    } else if (bodyPart === "upper arms") {
      return model8;
    } else if (bodyPart === "cardio") {
      return model9;
    } else if (bodyPart === "shoulders") {
      return model10;
    } else if (bodyPart === "lower arms") {
      return model11;
    } else {
      return model3; // Default fallback model
    }
  };
  

  return (
    <div className="w-full bg-[#040D12] overflow-hidden">
      <div className="flex flex-col items-center justify-center text-white p-5 ">
        <h1
          className="font-[head3] lg:text-[44px] xs:text-[30px] mb-12 text-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Awesome Exercises You <br /> Should Know
        </h1>
        <div
          className="relative mb-18"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <input
            className="h-14 text-black p-4 lg:w-[1170px] xs:w-[350px] outline-red-800 bg-gray-200 rounded-full font-bold border-none overflow-hidden"
            placeholder="Search Exercises"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSearchClick}
            className="search-btn absolute rounded-full right-0 bg-red-600 text-white text-[14px] lg:text-[20px] font-normal w-[80px] lg:w-[173px] h-14"
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="w-full h-[60vh] flex justify-center items-center"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="w-[80vw]  h-[50vh] flex flex-row gap-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="h-full w-full"
            loop={true}
          >
            {bodyParts.map((bodyPart, index) => (
              <SwiperSlide
                key={index}
                className="relative h-full flex justify-center items-center mx-4 cursor-pointer"
                onClick={() => handleCategoryClick(bodyPart)}
              >
                <img
                  src={getModelForBodyPart(bodyPart)}
                  alt={bodyPart}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
                <h2 className="relative z-2 text-center text-lg font-bold text-white">
                  {bodyPart.toUpperCase()}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        ref={resultsRef}
        className="w-full min-h-[20vh] bg-[#040D12] text-white overflow-hidden"
      >
        <h1
          className="text-center font-[head] text-[3rem]"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Showing Results
        </h1>
        
        {loading ? (
          <CardLoading />
        ) : error ? (
          <div className="text-center text-red-600">
            Failed to fetch exercises. Please try again.
          </div>
        ) : filteredExercises.length === 0 ? (
          <div className="text-center text-red-600">
            No exercises found. Please try a different search term or category.
          </div>
        ) : (
          <div
            className="flex flex-wrap justify-center gap-10 mt-10 p-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {filteredExercises.slice(0, visibleExercises).map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
        )}
        
        {!loading && !error && visibleExercises < filteredExercises.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreExercises}
              className="bg-red-600 text-white px-6 py-2 rounded-full"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
