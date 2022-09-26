import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build better things together
          </p>
          <h1 className="p-4 text-gray-700">
            Hello, I'm <span className="text-[#5651e5]">Juan</span>
          </h1>
          <h1 className="p-2 text-gray-700">Front-end Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a front-end web developer specializing in web design and
            digital experiences. Currently, I am focused on building responsive
            front-end web applications while learningback-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <div className="rounded-full shadow-md shadow-gray-500 p-4 hover:text-[#5651e5] hover:animate-bounce ease-in duration-300 cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
            <div className="rounded-full shadow-md shadow-gray-500 p-4 hover:text-[#5651e5] hover:animate-bounce ease-in duration-300 cursor-pointer">
              <FaGithub size={20} />
            </div>
            <div className="rounded-full shadow-md shadow-gray-500 p-4 hover:text-[#5651e5] hover:animate-bounce ease-in duration-300 cursor-pointer">
              <AiOutlineMail size={20} />
            </div>
            <div className="rounded-full shadow-md shadow-gray-500 p-4 hover:text-[#5651e5] hover:animate-bounce ease-in duration-300 cursor-pointer">
              <BsFillPersonLinesFill size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
