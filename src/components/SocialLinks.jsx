import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailchimp,
} from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-ali-iftikhar-a217131aa/",
      style: "rouned-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Instagram
          <FaSquareInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/m.aliiftikhar_",
    },
    {
      id: 3,
      child: (
        <>
          Dribbble <FaSquareDribbble size={30} />
        </>
      ),
      href: "https://dribbble.com/m_ali242",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaSquareFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/mali.iftikhar.73?mibextid=JRoKGi",
    },
    {
      id: 5,
      child: (
        <>
          Mail <IoIosMail size={30} />
        </>
      ),
      href: "mailto:muhammadali.2420844@gmail.com",
      style: "rouned-tr-md",
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
