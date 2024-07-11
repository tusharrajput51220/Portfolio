import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
     mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <Image
        className="-mb-20 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 
        xl:w-[400px] xl:h-[400px] hidden md:inline-flex"
        src="/p3.jpg"
        alt=""
        width={128}
        height={128} 
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm xl:text-base"> 
          Im Tushar 💯, as a full stack developer, I excel in both front-end and back-end
          technologies, adeptly handling the complete web development lifecycle.
          With a strong grasp of client-side and server-side programming, I
          created seamless, responsive, and functional web applications.🌟 My
          expertise spans HTML, CSS, JavaScript, and frameworks like React or
          Angular, as well as server technologies like Node.js, Express, and
          databases such as MongoDB or SQL. My problem-solving skills and
          attention to detail enable you to deliver high-quality, scalable
          solutions while collaborating effectively with cross-functional teams.
          Driven by a passion for technology, I continually stay updated with
          industry trends and advancements.
        </p>
      </div>
    </div>
  );
}

export default About;
