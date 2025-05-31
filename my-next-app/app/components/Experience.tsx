'use client';

import React, { useRef, useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({ }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      company: "Simplyfy Technocraft Pvt. Ltd.",
      role: "Backend Developer",
      swork: "September 2024",
      ework: "Present",
      p1: "/html.jpg",
      p2: "/csss.jpg",
      p3: "/jpt.jpg",
      p4: "/reac.jpg",
      p5: "/node.jpg",
      p6: "/mongo.png",
      s1: "Developed scalable backend services and APIs using Node.js and Express.js, focusing on performance, maintainability, and security best practices.",
      s2: "Integrated GraphQL to support flexible and efficient data querying, ensuring optimized response structures for frontend applications.",
      s3: "Managed and optimized MongoDB schemas and operations to support rapid data access, while ensuring scalability across microservice architectures.",
      experience: "",
    },
    {
      company: "Saraf Fincom Pvt. Ltd.",
      role: "FullStack Developer",
      swork: "January 2024",
      ework: "August 2024",
      p1: "/html.jpg",
      p2: "/csss.jpg",
      p3: "/jpt.jpg",
      p4: "/reac.jpg",
      p5: "/node.jpg",
      p6: "/mysql.png",
      s1: "Worked on multiple enterprise-level applications, building responsive frontend interfaces in ReactJS and NextJS, styled with Tailwind CSS.",
      s2: "Created robust APIs and MySQL models using Sequelize ORM and handled complex data relationships efficiently.",
      s3: "Implemented middleware and integrated third-party libraries within ExpressJS to deliver scalable backend services.",
      experience: "",
    },
    {
      company: "NetCreative Mind Solutions",
      role: "FullStack Developer",
      swork: "February 2023",
      ework: "December 2023",
      p1: "/html.jpg",
      p2: "/csss.jpg",
      p3: "/jpt.jpg",
      p4: "/reac.jpg",
      p5: "/java.png",
      p6: "/mongo.png",
      s1: "Developed full-stack solutions using ReactJS for frontend and Spring Boot for backend services across various government portals.",
      s2: "Designed and managed backend APIs, models, and workflows using Java Spring, and ensured seamless integration with frontend via REST.",
      s3: "Worked with both SQL and NoSQL databases and optimized performance for large datasets using caching and indexing strategies.",
      experience: "https://drive.google.com/file/d/1f5NckjWP6q40GH7a6j_uMA3yG23_JJQc/view",
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
    <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Experience
      </h3>

      {/* Left Arrow */}
      {activeIndex > 0 && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl hover:text-yellow-400"
        >
          ◀
        </button>
      )}

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="w-full h-full flex overflow-x-scroll snap-x snap-mandatory space-x-0 mt-32 hide-scrollbar"
      >
        {cards.map((card, idx) => (
          <ExperienceCard key={idx} {...card} />
        ))}
      </div>

      {/* Right Arrow */}
      {activeIndex < cards.length - 1 && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl hover:text-yellow-400"
        >
          ▶
        </button>
      )}
    </div>
  );
}

export default Experience;
