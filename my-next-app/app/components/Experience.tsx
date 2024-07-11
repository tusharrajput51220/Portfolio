import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({ }: Props) {
  return (
    <div
      className="h-screen flex relative overflow-hidden  flex-col text-left  md:flex-row max-w-full px-10
      justify-evenly mx-auto  items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20
       scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin relative top-[20px]"
      >
        <ExperienceCard company='Saraf Fincom Pvt. Ltd.' role="FullStack Developer" swork='January 2024'
          ework='present' p1='html.jpg' p2='csss.jpg' p3='jpt.jpg' p4='reac.jpg' p5='node.jpg' p6='mysql.png'
          s1='Worked on multiple applications with frontend in ReactJs, created components in React and Bootstrap.'
          s2="Created APIs, models, or tables in MySQL Workbench using Sequelize ORM library for 
        NodeJs, also created controllers" s3="Efficiently used NodeJs, ExpressJs, and
         multiple other packages and third-party libraries and middlewares"
          experience=''
        />

        <ExperienceCard company='NetCreative Mind Solutions' role="FullStack Developer" swork='February 2023'
          ework='December 2023' p1='html.jpg' p2='csss.jpg' p3='jpt.jpg' p4='reac.jpg' p5='java.png' p6='mongo.png'
          s1='Worked on multiple applications with frontend in ReactJs, created components in React and Bootstrap.'
          s2="Created APIs, models, or tables in MySQL Workbench using Sequelize ORM library for 
        NodeJs, also created controllers" s3="Efficiently used NodeJs, ExpressJs, and
         multiple other packages and third-party libraries and middlewares" experience='https://drive.google.com/file/d/1f5NckjWP6q40GH7a6j_uMA3yG23_JJQc/view'
        />
      </div>
    </div>
  );
}

export default Experience;
