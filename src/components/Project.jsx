import React from "react";
import { projects } from "../constants";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const Certificate = () => {
  return (
    <>
      <div id="project">
        <h2 className="text-center text-3xl lg:text-5xl mt-20 font-bold appear-animation">
          A selection of <br />
          <span className="block sm:inline bg-gradient-to-r from-[#30CFD0] to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 lg:mt-0 lg:mr-56 lg:ml-56 lg:mr-20 md:gap-y-6 gap-y-32 lg:gap-y-10 md:ml-8 md:mr-8 appear-animation">
        {projects.map(({ id, title, des, img, video, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] md:w-[40vw] lg:w-[30vw] md:min-h-[22rem] mx-auto md:my-3 "
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[42vh] lg:h-[42vh] mb-10 md:h-[32vh]  md:w-[35vw] lg:w-[25vw]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-lg">
                  {/* Conditionally render video if present, otherwise show image */}
                  {video ? (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute bottom-0 w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <h1 className="font-bold lg:text-1xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-normal lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificate;
