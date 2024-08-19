/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchData, exerciseOptions } from "../utils/FetchData";

// Create the context
export const ExerciseContext = createContext();

// Custom hook to use the ExerciseContext
export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchExercises = async () => {
    try {
      const data = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=100", exerciseOptions);
      setExercises(data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <ExerciseContext.Provider value={{ exercises, loading, selectedCategory, setSelectedCategory }}>
      {children}
    </ExerciseContext.Provider>
  );
};
