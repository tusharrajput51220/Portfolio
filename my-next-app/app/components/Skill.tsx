import Image from "next/image";
import React from "react";

type Props = {
  src: string,
  number: string,
};

function Skill({src,number}: Props) {
  return (
    <div className="group flex relative cursor-pointer">
      <Image
        src={src}
        alt=''
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-[80px] xl:h-[80px] filter 
        group-hover:grayscale transition duration-300 ease-in-out"
        width={128}
        height={128} 
      />
        {/* responsive correction */}
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white 
      h-20 w-20 md:w-28 md:h-28 xl:w-[80px] xl:h-[80px] rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{number}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
