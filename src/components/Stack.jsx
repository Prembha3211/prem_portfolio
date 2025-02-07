import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../style";

const Stack = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-72">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-20">
        Tech <span className="text-purple-300">Stack</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="w-20 h-20 sm:w-24 sm:h-28 lg:w-24 lg:h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
