import React from "react";
import { globvid, grid1Img, grid2Img, grid4Img } from "../constants";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center w-4/5 mt-24 lg:mt-42 sm:mt-64 mx-auto "
    >
      <h1 className="text-3xl sm:text-4xl font-bold ">Hello, There 🖐️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-8">
        <div className="relative flex flex-col items-start justify-center w-full h-auto sm:h-[50vh] lg:h-[42vh] overflow-hidden border border-gray-500 bg-[#080020b7] rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg p-5">
          <img
            src={grid1Img}
            alt="card-image"
            className="w-full h-28 object-cover mb-11"
          />
          <h1 className="text-xl sm:text-2xl text-gray-300 ">
            Hi there, I'm Prem
          </h1>
          <p className="mt-2 text-gray-400 text-sm leading-5 max-w-xs">
            With 4 years of experience, I have honed my skills in both frontend
            and backend dev, creating dynamic and responsive websites.
          </p>
        </div>

        <div className="relative flex flex-col items-start justify-center w-full h-auto sm:h-[50vh] lg:h-[42vh] overflow-hidden border border-gray-500 bg-[#080020b7] rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg p-5">
          <img
            src={grid2Img}
            alt="card-image"
            className="w-32 h-52 ml-20 lg:ml-16 lg:ml-[6rem] object-cover"
          />
          <h1 className="text-xl sm:text-2xl text-gray-300">Tech Stack</h1>
          <p className="mt-2 text-gray-400 text-sm leading-5 max-w-xs">
            I specialize in a variety of languages, frameworks, and tools that
            allow me to build robust and scalable applications.
          </p>
        </div>

        <div className="relative flex flex-col items-start justify-center w-full sm:w-[38rem] h-auto sm:h-[60vh] lg:w-96 lg:h-[87vh] overflow-hidden border border-gray-500 bg-[#080020b7] rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg p-5">
          <video
            src={globvid}
            className="w-full h-64  sm:h-80 object-cover mb-4 mix-blend-lighten"
            autoPlay
            loop
            muted
          ></video>
          <h1 className="text-xl sm:text-2xl text-gray-300">
            I'm very flexible with time zone communication & locations
          </h1>
          <p className="mt-2 text-gray-400 text-sm leading-5 max-w-xs">
            I'm based in Italy, Bari and open to remote work worldwide.
          </p>
          <div className="ml-9 lg:ml-14 mt-7 lg:mt-0">
            <a href="">
              <MagicButton
                title="Contact me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        <div
          className="relative flex flex-col items-start justify-center w-full h-auto sm:h-[45vh] lg:h-[40vh] overflow-hidden border border-gray-500 bg-[#080020b7] rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg p-5 sm:col-span-2 lg:col-span-2 
        lg:-mt-80"
        >
          <img
            src={grid4Img}
            alt="card-image"
            className="w-full h-36 object-cover mb-4"
          />
          <h1 className="text-xl sm:text-2xl text-gray-300">
            My passion for coding
          </h1>
          <p className="mt-2 text-gray-400 text-sm leading-5 max-w-2xl">
            I love solving problems and building things through code.
            Programming isn't just my profession - it's my passion. I enjoy
            exploring new technologies and enhancing my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
