import React from "react";
import figma1 from "../assets/figma1.jpg";
import figma2 from "../assets/figma2.jpg";
import figma3 from "../assets/figma3.jpg";
import figma4 from "../assets/figma4.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: figma1,
    },
    {
      id: 2,
      src: figma2,
    },
    {
      id: 3,
      src: figma3,
    },

    // {
    //     id: 4,
    //     src: figma4
    //     },
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=" "
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center just-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Figma
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
