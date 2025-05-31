'use client'

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

type Props = {};

function Project({ }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      src: "/alfennzo.webp",
      heading: "Alfennzo",
      description: `Built a QR-based food delivery web app using Node.js, Express.js, and MongoDB for real-time order management. Integrated Redis for fast caching and sessions. Developed a fully responsive UI with Next.js and Tailwind CSS, offering customers seamless ordering from tables or home.`,
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
      ],
      link: "https://www.qr.alfennzo.com/?qrId=rENE@!U091",
    },
    {
      src: "/tripocation.jpg",
      heading: "Tripocation Holiday",
      description: `Developed a travel web platform with React and Java Spring Boot using microservices architecture. Included user-friendly features like responsive package browsing, enquiry forms, and callback options. Built an admin panel for package management. Hosted on Hostinger.`,
      techStack: ["React", "Spring Boot", "Microservices", "Tailwind CSS", "Hostinger"],
      link: "https://www.tripocationholiday.com",
    },
    {
      src: "/simplyfy.jpg",
      heading: "Simplyfy",
      description: `Created a crypto trading platform with real-time market data, portfolio tracking, and seamless transaction execution. Designed a responsive and secure trading UI using Next.js and Tailwind CSS. Built the backend with Node.js and Express, and integrated GraphQL APIs for efficient data handling.`,
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "GraphQL",
        "Express",
        "JavaScript",
      ],
      link: "#", // Replace with real link if available
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 bg-black">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      {/* Left Arrow */}
      {activeIndex > 0 && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl hover:text-yellow-400 transition-colors"
        >
          ◀
        </button>
      )}

      {/* Scrollable Projects */}
      <div
        ref={scrollRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 px-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-screen flex-shrink-0 snap-center flex flex-col ${project.heading === "Tripocation Holiday" ? "space-y-1" : "space-y-6"
              } items-center justify-center p-10 md:p-20 h-screen`}
          >
            <Image
              src={project.src}
              alt={project.heading}
              width={150}
              height={140}
              className="rounded-md object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />


            <div className="space-y-4 max-w-2xl text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-white hover:underline hover:text-yellow-400 transition-colors"
              >
                {project.heading}
              </a>
              <p className="text-white font-semibold text-sm leading-relaxed">
                {project.description}
              </p>

              <h5 className="mt-4 text-base font-semibold text-yellow-400">
                Tech Stack Used:
              </h5>
              <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm font-medium text-gray-300">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-800 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {activeIndex < projects.length - 1 && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl hover:text-yellow-400 transition-colors"
        >
          ▶
        </button>
      )}

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Project;
