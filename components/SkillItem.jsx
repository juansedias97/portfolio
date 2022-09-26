import React from "react";
import Image from "next/image";

const SkillItem = ({ title, icon, addStyle }) => {
  return (
    <div
      className={
        "p-6 shadow-xl rounded-xl hover:scale-105 lg:hover:scale-[1.15] ease-in duration-300 " +
        addStyle
      }
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image alt="/" src={icon} width="64px" height="64px" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
