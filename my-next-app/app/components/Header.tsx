import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start p-5 justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <div>
        <SocialIcon
          url="https://instagram.com/choco_51220"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/tushar-rajput-420710251"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/tusharrajput51220"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      {/* </motion.div> */}
      <Link href="#contact">
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
