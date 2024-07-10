import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col mt-10 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 
    overflow-hidden"
    >
      {/* <img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="p4.jpg"
        alt="image"
      /> */}
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">First Packs Pvt. Ltd.</h4>
        <p className="font-bold text-2xl mt-1">FullStack Developer</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="html.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="csss.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="jpt.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="reac.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="node.jpg" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... -Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summarypoints Summarypoints Summarypoints Summarypoints
            Summarypoints Summarypoints Summarypoints
          </li>
          <li>
            Summarypoints Summarypoints Summarypoints Summarypoints
            Summarypoints Summarypoints Summarypoints
          </li>
          <li>
            Summarypoints Summarypoints Summarypoints Summarypoints
            Summarypoints Summarypoints Summarypoints
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
