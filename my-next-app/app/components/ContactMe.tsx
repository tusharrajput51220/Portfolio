"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

type Props = {};

function ContactMe({}: Props) {
  //   const { register, handleSubmit } = useForm<Inputs>();
  //   const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //     console.log(formData);
  //   };
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (name == "name") {
      setUserData({
        ...userData,
        name: value,
      });
    }
    if (name == "email") {
      setUserData({
        ...userData,
        email: value,
      });
    }
    if (name == "subject") {
      setUserData({
        ...userData,
        subject: value,
      });
    }
    if (name == "message") {
      setUserData({
        ...userData,
        message: value,
      });
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const mailtoURL = `mailto:papareact.team@gmail.com?subject=${encodeURIComponent(
      userData.subject
    )}&body=Hi, my name is ${encodeURIComponent(
      userData.name
    )}. ${encodeURIComponent(userData.message)} (${encodeURIComponent(
      userData.email
    )})`;
    window.location.href = mailtoURL;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-[150px]">
        <h4 className="text-4xl text-center font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91&nbsp;9773675356</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">tusharrajput51220@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">New Delhi</p>
          </div>
        </div>

        <form
          // onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              //   {...register("name")}
              onChange={(e) => handleChange(e)}
              placeholder="Name"
              className="contactInput"
              type="text"
              name="name"
            />
            <input
              //   {...register("email")}
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              className="contactInput"
              type="email"
              name="email"
            />
          </div>

          <input
            // {...register("subject")}
            onChange={(e) => handleChange(e)}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
          />

          <textarea
            // {...register("message")}
            onChange={(e) => handleChange(e)}
            placeholder="Message"
            className="contactInput"
            name="message"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
