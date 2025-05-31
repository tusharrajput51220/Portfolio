import Image from "next/image";
import React from "react";

type Props = {
  company: string;
  role: string;
  swork: string;
  ework: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  s1: string;
  s2: string;
  s3: string;
  experience: string;
};

function ExperienceCard({
  company,
  role,
  swork,
  ework,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  s1,
  s2,
  s3,
  experience,
}: Props) {
  return (
    <article
      className="flex flex-col mt-10 rounded-lg items-start justify-center flex-shrink-0 w-screen h-full
      snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="text-white w-full text-left ml-6 md:ml-14">
        <h4 className="text-2xl xl:text-4xl font-light">{company}</h4>
        <p className="font-bold text-2xl xl:text-4xl mt-1">{role}</p>

        {/* Tech Icons */}
        <div className="flex flex-wrap gap-2 my-4">
          {[p1, p2, p3, p4, p5, p6].map((src, i) => (
            <Image key={i} src={src} alt={`Tech ${i}`} width={40} height={40} className="rounded-full" />
          ))}
        </div>

        {/* Duration & Letter */}
        <p className="uppercase py-3 text-gray-300">
          {swork} - {ework}
          {experience && (
            <a
              href={experience}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline decoration-[#F7AB0A]/50"
            >
              (Experience Letter)
            </a>
          )}
        </p>

        {/* Bullets */}
        <ul className="list-disc space-y-5 ml-5 text-lg text-gray-200 max-w-[95%] leading-relaxed">
          <li>{s1}</li>
          <li>{s2}</li>
          <li>{s3}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
