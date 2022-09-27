import React from "react";
import ContactImg from "../public/assets/contact.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-4 py-16 w-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid md:grid-cols-5 gap-8 m-auto">
          {/* left */}
          <div className="col-span-3 md:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="md:py-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 w-full"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Juan Pineda</h2>
                <p>Front-End Developer</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between p-2">
                  <div className="rounded-full shadow-md shadow-gray-500 p-4 cursor- hover:text-[#5651e5]">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-500 p-4 cursor- hover:text-[#5651e5]">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-500 p-4 cursor- hover:text-[#5651e5]">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-500 p-4 cursor- hover:text-[#5651e5]">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
