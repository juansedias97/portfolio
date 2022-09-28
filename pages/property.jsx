import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={propertyImg}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-4">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-8 grid gap-2 lg:grid-cols-5 lg:gap-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest text-[#5651e5] uppercase">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            nesciunt ullam eos beatae adipisci odio natus voluptatum illum
            provident ratione animi, id aliquid ex sunt tenetur atque autem,
            quibusdam nisi numquam! Optio, iusto? Et doloremque quam,
            voluptatum, quaerat sequi delectus officiis asperiores dolore
            dolores fugit veritatis sint voluptates corrupti deleniti, officia
            ut perferendis earum nulla adipisci ratione esse. Nostrum, nam. Sed
            facere ab quidem temporibus et dolore animi itaque voluptatibus ea
            fuga! Dolorum ad delectus natus porro corrupti quidem, soluta
            quisquam obcaecati non blanditiis hic voluptates necessitatibus
            repellendus iure laboriosam ratione, quam dolore animi veritatis
            consectetur ducimus sunt temporibus. Aliquid.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-1 lg:shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <p className=" lg:text-center py-4 font-bold">Technologies</p>
          <div className="">
            <div className="flex items-center gap-2">
              <RiRadioButtonFill />
              <p>React</p>
            </div>
            <div className="flex items-center gap-2">
              <RiRadioButtonFill />
              <p>Tailwind</p>
            </div>
            <div className="flex items-center gap-2">
              <RiRadioButtonFill />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <button className="px-8 py-2 mr-8">Demo</button>
          <Link href="/#projects">
            <p className="underline py-2 cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default property;
