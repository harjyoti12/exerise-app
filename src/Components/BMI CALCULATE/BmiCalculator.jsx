import React, { useState } from "react";
import { background1, model3 } from "../All Images/Index";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obesity";
    }
    setStatus(bmiStatus);
    setWeight("");
    setHeight("");
  };

  return (
    <div className="w-full mt-2 h-[70vh] flex">
      <div className="w-[50vw] h-full flex justify-center items-center bg-black">
        <div
          className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
            BMI Calculator
          </h1>
          <div className="space-y-4">
            <div className="input-group">
              <label className="block text-sm font-medium text-gray-700">
                Weight (kg):
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
            <div className="input-group">
              <label className="block text-sm font-medium text-gray-700">
                Height (cm):
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
            <button
              onClick={calculateBMI}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-200"
            >
              Calculate
            </button>
            {bmi && (
              <div className="result mt-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Your BMI: <span className="text-indigo-600">{bmi}</span>
                </h3>
                <h3 className="text-xl font-semibold text-gray-700">
                  Status:{" "}
                  <span
                    className={`${
                      status === "Underweight"
                        ? "text-yellow-500"
                        : status === "Normal weight"
                        ? "text-green-500"
                        : status === "Overweight"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative w-[50vw] h-full flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${background1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        </div>

        <img
          src={model3}
          alt="Random"
          loading="lazy"
          className="relative z-10 h-[70vh] object-cover object-top"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
};

export default BmiCalculator;
