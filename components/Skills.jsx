import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";
import htmlIcon from "../public/assets/skills/html.png";
import cssIcon from "../public/assets/skills/css.png";
import javascriptIcon from "../public/assets/skills/javascript.png";
import reactIcon from "../public/assets/skills/react.png";
import nextIcon from "../public/assets/skills/nextjs.png";
import tailwindIcon from "../public/assets/skills/tailwind.png";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem title="HTML" icon={htmlIcon} />
          <SkillItem title="CSS" icon={cssIcon} />
          <SkillItem title="JavaScript" icon={javascriptIcon} />
          <SkillItem title="React" icon={reactIcon} />
          <SkillItem title="Next" icon={nextIcon} addStyle="lg:col-start-2" />
          <SkillItem title="TailWind" icon={tailwindIcon} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
