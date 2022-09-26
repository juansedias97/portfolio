import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";

const ProjectItem = ({ title, backgroundImg, url }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709def] ease-in hover:scale-105 duration-100">
      <Image
        alt="/"
        src={backgroundImg}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl  text-white tracking-wider text-center ">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        <Link href={url}>
          <p className="text-center py-3 px-12 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
