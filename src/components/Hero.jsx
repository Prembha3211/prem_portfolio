import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[20rem] lg:h-[35rem]">
      <div>
        <Spotlight
          className="-top-40 -left-10 sm:-left-32 sm:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="top-28 left-80 h-[80vh] w-28 sm:w-[50vw] lg:w-[40vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[90vw] sm:max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-24 sm:mt-32 lg:mt-56 px-4 sm:px-8">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-full sm:max-w-80">
            Dynamic web magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-blue-100 text-[20px] sm:text-[40px] lg:w-[60rem] md:text-5xl lg:text-6xl "
            words=" Hi, I'm Adrian, a React.js Developer based in Mumbai"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm sm:text-lg lg:text-2xl">
            Transforming Concepts into Seamless User Experiences
          </p>

          <a href="">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
