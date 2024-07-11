import React from "react";

type Props = {};

function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects?.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20
            md:p-44 h-screen"
          >
            <img src="n2.png" alt="" className="w-[120px] h-[120px] rounded" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline  decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects?.length}:
                </span>
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                I developed a Netflix clone, a web application mimicking the
                popular streaming platform. It features a sleek, user-friendly
                interface with categories, search functionality, and responsive
                design. Users can browse a curated collection of movies and TV
                shows, view details, and stream content seamlessly. The project
                leverages modern web technologies such as React for the frontend
                and a robust backend to manage content and user data, ensuring a
                smooth and engaging viewing experience.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Project;
