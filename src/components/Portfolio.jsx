import React from "react";
import gemini from "../assets/Gemini (1).png";
import hh from "../assets/Hello Here.png";
import gd from "../assets/Game Dev.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gemini,
      title: "Gemini Clone",
    },
    {
      id: 2,
      src: hh,
      title: "Hello:Here",
    },
    {
      id: 3,
      src: gd,
      title: "Game Dev",
    },

  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white
    md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg w-full h-full">
              <img
                src={src}
                alt=" "
                className="rounded-md duration-200 hover:scale-105 w-full h-fit"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py- m-2 duration-200 hover:scale-105">
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
