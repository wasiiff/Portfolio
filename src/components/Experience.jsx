import React from "react";
import html_image from "../assets/html_image.png";
import css_image from "../assets/css_image.png";
import js_image from "../assets/js_image.png";
import native_image from "../assets/react-native-app-icon.png";
import tailwind_image from "../assets/tailwind_image.png";
import react_image from "../assets/React.webp";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html_image,
      title: "Html",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      src: css_image,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: react_image,
      title: "React JS",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: js_image,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: tailwind_image,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: native_image,
      title: "React Native",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

          <p className="py-6 ">These are the technologies i have worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
    gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}"
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
