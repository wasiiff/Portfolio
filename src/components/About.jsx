import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black
    text-white "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          I’m a passionate Front-End Developer and a BS Computer Science
          undergraduate with expertise in React.js and Tailwind CSS. I love
          building dynamic, user-friendly web applications that blend aesthetics
          with performance. With a keen eye for design and a strong foundation
          in modern front-end technologies, I strive to create seamless digital
          experiences. Always eager to learn and innovate, I enjoy tackling new
          challenges and staying up-to-date with the latest trends in web
          development
        </p>
        <br />
        <p className="text-xl">
          From writing my first lines of code to developing full-fledged web
          applications, my journey as a Front-End Developer has been fueled by
          curiosity and passion.Whether it's optimizing performance, enhancing
          UI/UX, or exploring new front-end frameworks, I am always excited to
          push my skills further.
        </p>
      </div>
    </div>
  );
};

export default About;
