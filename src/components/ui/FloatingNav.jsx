import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [selectedNav, setSelectedNav] = useState(navItems[0]?.name);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  const navRefs = useRef([]);

  const [animationTrigger, setAnimationTrigger] = useState(false); // To trigger animation

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.name === selectedNav);
    if (navRefs.current[activeIndex]) {
      const { offsetWidth, offsetLeft } = navRefs.current[activeIndex];
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });

      // Trigger animation when nav item changes
      setAnimationTrigger((prev) => !prev);
    }
  }, [selectedNav, navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex w-[30rem] fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full backdrop-blur-md bg-white/10 shadow-[0px_2px_6px_rgba(255,255,255,0.1),0px_2px_4px_rgba(255,255,255,0.06)] z-[5000] pr-5 pl-4 py-3 items-center justify-center space-x-4 "
      )}
    >
      {/* Shooting Star Effect */}

      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          to={navItem.link}
          ref={(el) => (navRefs.current[idx] = el)}
          onClick={() => handleScrollToSection(navItem.id)}
          className={cn(
            "relative text-cyan-500 font-bold items-center flex space-x-1 hover:text-gray-300 transition-colors"
          )}
        >
          <span className="hidden sm:block text-lg">{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};
