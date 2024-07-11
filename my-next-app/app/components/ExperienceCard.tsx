import Image from "next/image";
import React from "react";

type Props = {
  company: string,
  role: string,
  swork: string,
  ework: string,
  p1: string,
  p2: string,
  p3: string,
  p4: string,
  p5: string,
  p6: string,
  s1: string,
  s2: string,
  s3: string,
  experience: string,
};

function ExperienceCard({ company, role, swork, ework, p1, p2, p3, p4, p5, p6, s1, s2, s3, experience }: Props) {
  return (
    <article
      className="flex flex-col mt-10 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 
    overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-2xl xl:text-4xl relative left-[20px] xl:left-0 font-light">{company}</h4>
        <p className="font-bold text-2xl xl:text-4xl relative left-[20px] xl:left-0 mt-1">{role}</p>
        <div className="flex space-x-2 my-2 relative left-[20px] xl:left-0">
          <Image className="h-10 w-10 rounded-full" src={p1} alt=""  width={128}
        height={128}  />
          <Image className="h-10 w-10 rounded-full" src={p2} alt=""  width={128}
        height={128}  />
          <Image className="h-10 w-10 rounded-full" src={p3} alt=""  width={128}
        height={128}  />
          <Image className="h-10 w-10 rounded-full" src={p4} alt=""  width={128}
        height={128}  />
          <Image className="h-10 w-10 rounded-full" src={p5} alt=""  width={128}
        height={128}  />
          <Image className="h-10 w-10 rounded-full" src={p6} alt=""  width={128}
        height={128}  />
        </div>
        <p className="uppercase py-5 text-gray-300 relative left-[20px] xl:left-0">
          {swork}-{ework}{experience && <a className="underline decoration-[#F7AB0A]/50"
            href={experience}>(Experience letter)</a>}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg relative left-[20px] xl:left-0">
          <li>
            {s1}
          </li>
          <li>
            {s2}
          </li>
          <li>
            {s3}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
