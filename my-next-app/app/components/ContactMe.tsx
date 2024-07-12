"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Props = {};

function ContactMe({ }: Props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData.subject || !userData.name || !userData.email) {
      alert("Enter all details!!")
    } else {
      setLoading(true);
      const mailtoURL = `mailto:tusharrajput51220@gmail.com?subject=${encodeURIComponent(
        userData.subject
      )}&body=Hi, my name is ${encodeURIComponent(
        userData.name
      )}. ${encodeURIComponent(userData.message)} (${encodeURIComponent(
        userData.email
      )})`;
      window.location.href = mailtoURL;
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-[120px]">
        <h4 className="text-sm xl:text-4xl text-center font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-2 relative bottom-[10px]">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] w-4 h-4 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-md xl:text-2xl">+91&nbsp;9773675356</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] w-4 h-4 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-md xl:text-2xl">tusharrajput51220@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] w-4 h-4 xl:h-7 xl:w-7 animate-pulse" />
            <p className="text-md xl:text-2xl">New Delhi</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto relative bottom-[20px]"
        >
          <div className="flex space-x-2">
            <input
              onChange={handleChange}
              placeholder="Name"
              className="contactInput xl:w-[200px] w-[85px]"
              type="text"
              name="name"
            />
            <input
              onChange={handleChange}
              placeholder="Email"
              className="contactInput"
              type="email"
              name="email"
            />
          </div>

          <input
            onChange={handleChange}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
          />

          <textarea
            onChange={handleChange}
            placeholder="Message"
            className="contactInput"
            name="message"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg 
            hover:bg-[#F7AB0A]/70 hover:text-black"
            disabled={loading}
          >
            {loading ? <LoadingIcon /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

const LoadingIcon = () => (
  <svg
    className="animate-spin h-5 w-5 mr-3"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l1.146-1.147a6 6 0 004.242 1.758A6 6 0 0013.5 14.5l-1.147 1.146A4.5 4.5 0 016 17.291z"
    ></path>
  </svg>
);

export default ContactMe;
