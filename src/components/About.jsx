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
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          consequatur voluptatibus et fuga, molestias libero nam iste autem
          dignissimos asperiores! Qui quis quo soluta omnis inventore eligendi.
          Voluptatem tenetur eveniet nulla nesciunt est. Pariatur nisi illo
          dolores omnis ipsam ea corrupti, atque impedit. Ipsa dolores
          consequuntur illum voluptatibus vitae quod?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dignissimos, fugiat consequatur est velit totam harum nam asperiores
          at deleniti nisi qui distinctio labore doloremque temporibus officia
          reiciendis quos, necessitatibus quae, animi soluta sint? Quam nobis
          ipsa cupiditate assumenda ad laboriosam dolorem error temporibus non?
          Corporis voluptas molestias sint numquam!
        </p>
      </div>
    </div>
  );
};

export default About;
