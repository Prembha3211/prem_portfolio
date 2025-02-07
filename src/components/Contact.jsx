import React, { useState } from "react";
import Pyramid from "./ui/pyramid";
import { contactInfo } from "../constants";
import { BsFillSendFill } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div
      id="contact"
      className="relative overflow-hidden  sm:p-10 z-10 mt-14 sm:mt-16"
    >
      <div className="font-bold text-3xl sm:text-5xl text-center">
        <h1>
          Contact <span className="text-purple-300">Me</span>
        </h1>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-xl mx-auto gap-5 bg-gray-900/90 p-7 lg:p-10 rounded-xl backdrop-blur-md shadow-xl mt-10 sm:mt-14 lg:mt-20"
        style={{
          clipPath:
            "polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)",
        }}
      >
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Let's talk on your
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100 animate-shine font-bold"
              style={{
                animationDelay: `0.1s`,
              }}
            >
              {" "}
              great project
            </span>{" "}
            together
          </h3>
          <div className="flex flex-col gap-5 mt-7">
            {contactInfo.map((contact, index) => (
              <article
                key={index}
                className="flex items-center w-full sm:w-80 md:w-full p-4 border border-gray-700 rounded-lg bg-gray-800 mt-2"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src={contact.icon}
                    alt="contact icon"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 justify-between items-center ml-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {contact.name}
                    </h3>
                    <p className="text-gray-400 text-sm truncate hidden sm:block">
                      {contact.value}
                    </p>
                  </div>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-700 px-3 py-2 rounded-full text-white transition hover:bg-gray-600"
                  >
                    <span className="mr-2 flex">
                      {"Message".split("").map((char, index) => (
                        <span
                          key={index}
                          className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100 animate-shine font-bold"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full"
                      style={{ background: contact.color }}
                    >
                      <contact.btnIcon className="text-white text-xl" />
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex text-2xl mt-10 gap-3">
            {/* Fiverr */}
            <div className="relative group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-transform transform hover:scale-110">
                <SiFiverr />
              </div>
              <span className="absolute flex gap-1 items-center bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                <FaWhatsapp /> Fiverr
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-transform transform hover:scale-110">
                <AiFillGithub />
              </div>
              <span className="absolute flex gap-1 items-center bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition bg-blue-800 text-white text-xs px-2 py-1 rounded-md">
                <FaGithub /> GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-transform transform hover:scale-110">
                <AiFillLinkedin />
              </div>
              <span className="absolute flex gap-1 items-center bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                <FaLinkedin /> LinkedIn
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="w-full sm:w-full lg:w-full p-4 lg:p-10 mt-5 lg:mt-0 bg-gray-800 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Your full name"
            name="name"
            required
            className="w-full p-3 my-2 text-white bg-gray-900 rounded-lg border border-transparent focus:border-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            required
            className="w-full p-3  my-7 text-white bg-gray-900 rounded-lg border border-transparent focus:border-blue-400 focus:outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="w-full p-3 my-2 text-white bg-gray-900 rounded-lg border border-transparent focus:border-blue-400 focus:outline-none resize-none"
          ></textarea>

          {/* Button with Click Animation */}
          <button
            type="submit"
            onClick={handleClick}
            className="flex items-center justify-center w-full sm:w-48 lg:w-52 sm:ml-56 p-4 text-lg font-semibold text-white bg-blue-500 rounded-lg transition hover:bg-blue-600 group overflow-hidden mt-7"
          >
            <div className="flex items-center gap-2">
              <BsFillSendFill className="animate-bounce" />
              <span
                className={`transition-transform ${
                  isClicked ? "translate-x-64" : ""
                }`}
              >
                Send Now
              </span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
