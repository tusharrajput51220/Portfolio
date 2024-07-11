import React from "react";
import Projects from "./Projects";

type Props = {};

function Project({ }: Props) {
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

        <Projects src="google.png" heading='Google realtime' subject='I developed a Google clone utilizing 
      React for the frontend and Node.js for the backend. The project integrates Google APIs to mimic 
      core functionalities, providing users with a familiar search experience. React component-based
       architecture ensures a responsive and dynamic interface, while Node.js handles server-side 
       operations and API interactions efficiently. This clone showcases my skills in modern web
        development technologies and demonstrates my ability to replicate complex web services with
         practical implementation.' projectlink='https://github.com/tusharrajput51220/Google-clone/tree/master' 
         />

        <Projects src="chatapp.png" heading='realtime chatapp' subject='Created a real-time chat application 
      leveraging React for the user interface, Firebase and Firestore for real-time data synchronization,
       and Node.js for backend logic. This setup ensures instant messaging and seamless updates across
        all clients. React dynamic components provide a smooth user experience, while Firebase and 
        Firestore manage and sync chat data in real time. Node.js supports the application’s backend 
        processes, ensuring robust performance and scalability for the chat service.'
          projectlink='https://github.com/tusharrajput51220/Chat-app/tree/master'
           />

        <Projects src="n2.png" heading='netflix clone' subject='Developed a Netflix clone, a web
       application mimicking the popular streaming platform. It features a sleek, user-friendly 
       interface with categories, search functionality, and responsive design. Users can browse a 
       curated collection of movies and TV shows, view details, and stream content seamlessly. The 
       project leverages modern web technologies such as React for the frontend and a robust backend
        to manage content and user data, ensuring a smooth and engaging viewing experience.'
        
          projectlink='https://github.com/tusharrajput51220/Netflix-clone' />
      </div>


      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Project;
