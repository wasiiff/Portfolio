import React from "react";
import wasif from "../assets/image.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto mr-16 flex items-center justify-center h-full px-4 md:flex-row">
        <div className="flex mt-16 flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I' am a Frontend Developer
          </h2>
          <p className="text-gray-400 py-4">
            I specialize in crafting seamless and visually appealing interfaces
            that prioritize both functionality and aesthetics. My expertise in
            React JS allows me to create dynamic and interactive user
            experiences, while Tailwind CSS enables me to design sleek,
            responsive layouts with efficiency and precision.
          </p>
        </div>
        <div className="md:mt-8">
          <img
            src={wasif}
            alt="my profile"
            className="rounded-2xl md:mt-11 mx-auto sm:w-3/4 sm:h-3/4 md:w-2/3 md:h-2/3 shadow-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
