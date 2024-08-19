





import React from "react";
import "aos/dist/aos.css";
import { background, logo } from "../All Images/Index";
import { model3 } from "../All Images/Index";
import Programs from "../Programs/Programs";
import Exerises from "../Exerises/Exerises";
import BmiCalculator from "../BMI CALCULATE/BmiCalculator";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-[100vh] md:flex-row w-full  overflow-hidden relative">
        <div className="flex-1 bg-[#E4003A] w-full md:w-[70vw] flex items-start justify-center flex-col p-4 md:p-8 pb-6">
          <div className="w-full md:w-[50vw] flex items-center justify-between h-[8vh] absolute top-6">
            <img
              className="w-12 mt-10 md:w-16 h-12 md:h-16 ml-4 md:ml-8 max-sm: mb-[6vh]"
              src={logo}
              alt="Logo"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
            <ul
              className="hidden md:flex items-center justify-center mr-10 gap-4 md:gap-8 text-white cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <li className="underline-red-800">About Us</li>
              <li>Our Programs</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-start mt-8 md:mt-10 ml-2 md:ml-4">
            <h1
              className="font-[head] text-[4rem] md:text-[8rem] text-center mt-4 text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              ROCK HARD
            </h1>
            <span
              className="height font-[head] text-[6rem] md:text-[12rem] text-start text-white mt-[-1rem] md:mt-[-3rem] mr-2 md:mr-14 max-sm:text-[5rem]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              WORKOUT
            </span>
            <p
              className="text-white ml-4 md:ml-10 mb-4 text-left text-[0.875rem] md:text-[1rem] font-[head3] w-[80vw] md:w-[34vw]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Welcome to our gym! Achieve your fitness goals with us. Our
              top-notch facilities and expert trainers are here to support you
              every step of the way.
            </p>
            <button
              className="bg-black ml-4 md:ml-10 text-white rounded-full mt-6 px-4 md:px-6 py-2 md:py-3 font-[head3]"
             
            >
              GET STARTED
            </button>
          </div>
        </div>

        <img
          className="hidden md:block absolute aspect-[3/6] object-contain object-top bottom-0 left-[20vw] md:left-[44rem] z-30 model-image"
          src={model3}
          loading="lazy"
          alt="Model"
        />
        <div
          className="flex-1 bg-[#111827] opacity-80 backdrop-blur p-4 md:p-8 relative max-sm:hidden"
          style={{
            backgroundImage: `url(${background})`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ zIndex: 1 }}
          ></div>
          <div className="relative z-10">
            <div className="flex items-end justify-end">
              <button
                className="bg-transparent border border-white text-white font-[head3] mr-4 px-6 md:px-9 py-1.5 md:py-2 rounded-full"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Login
              </button>
            </div>
            <div className="flex flex-col justify-center items-center absolute left-4 md:left-[16.8rem] top-[3rem] md:mt-[8rem] gap-4 mb-10">
              <div
                className="mb-4 w-[60vw] md:w-[30vw]"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                  10 Healthy Tips
                </h2>
                <p className="text-white">
                  1. Stay hydrated. <br /> 2. Eat a balanced diet. <br /> 3.
                  Exercise regularly.
                </p>
              </div>
              <div
                className="mb-4 w-[60vw] md:w-[30vw]"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Muscles
                </h2>
                <p className="text-white w-[28vw] md:w-[14vw]">
                  Building muscle helps improve overall strength and endurance.
                </p>
              </div>
              <div
                className="w-[60vw] md:w-[30vw]"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Coach
                </h2>
                <p className="text-white w-[28vw] md:w-[14vw]">
                  Our certified coaches are dedicated to helping you reach your
                  fitness goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Programs />
      <Exerises />
      <BmiCalculator />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
