import React from "react";

type Props = {
    src: string,
    heading: string,
    subject: string,
    projectlink: string,
};

function Projects({ src, heading, subject,projectlink }: Props) {
    return (
    //     <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
    //    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20
            md:p-44 h-screen"
            >
                <img src={src} alt="" className="w-[120px] h-[120px] rounded" />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-4xl font-semibold text-center">
                        <a className="underline uppercase decoration-[#F7AB0A]/50" href={projectlink}>
                            {heading}
                        </a>
                    </h4>
                    <p className="text-lg text-center md:text-left">
                        {subject}
                    </p>
                </div>
            </div>
        // </div>
    );
}

export default Projects;