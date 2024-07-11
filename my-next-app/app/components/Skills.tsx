import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 relative top-[70px]"> 
        <Skill src="/jpt.jpg" number='95%'/>
        <Skill src="/reac.jpg" number='97%'/>
        <Skill src="/next.jpg" number='91%'/>
        <Skill src="/ts.jpg" number='80%'/>
        <Skill src="/tailwind.png" number='95%'/>
        <Skill src="/boot.jpg" number='80%'/>
        <Skill src="/node.jpg" number='85%'/>
        <Skill src="/express.png" number='78%'/>
        <Skill src="/html.jpg" number='98%' />
        <Skill src="/csss.jpg" number='99%'/>
        <Skill src="/java.png" number='82%'/>
        <Skill src="/cpp.jpg" number='78%'/>
        <Skill src="/fire.png" number='80%'/>
        <Skill src="/mongo.png" number='75%'/>
        <Skill src="/mysql.png" number='90%'/>
        <Skill src="/github.jpg" number='89%'/>
      </div>
    </div>
  );
}

export default Skills;
