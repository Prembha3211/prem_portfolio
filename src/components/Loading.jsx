import { useEffect, useState } from "react";
import "../Loading.css";
import { useLoading } from "../utils/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }) => {
  const { setIsLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false); // NEW STATE

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setClicked(true);
          setIsZoomed(true); // Start zoom animation
        }, 600);
      }, 600);
    }
  }, [percent]);

  useEffect(() => {
    if (isZoomed) {
      setTimeout(() => {
        setIsLoading(false); // Hide Loading component after zoom
      }, 1000);
    }
  }, [isZoomed]);

  useEffect(() => {
    import("../utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  return (
    <>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee className="text-black text-sm lg:text-8xl">
            <span> A Creative Developer</span> <span>A Creative Designer</span>
            <span> A Creative Developer</span> <span>A Creative Designer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""} ${
            isZoomed ? "loading-zoom" : ""
          }`}
        >
          <div className="loading-hover"></div>
          <div
            className={`loading-button ${isLoaded ? "loading-complete" : ""}`}
          >
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.floor(percent)}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading) => {
  const milestones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 100]; // Specific percentages
  let currentIndex = 0;

  function updateProgress() {
    // Stop only after reaching 100% and all milestones are processed
    if (currentIndex > milestones.length - 1) {
      clearInterval(interval);
      return;
    }

    const target = milestones[currentIndex];
    setLoading((prev) => {
      const step = 0.2; // Smaller steps between milestones for smooth transition
      const newPercent = Math.min(prev + step, target);

      // If we've reached or exceeded the current milestone, pause briefly
      if (newPercent >= target) {
        currentIndex++;
        if (newPercent < 100) {
          // Pause and resume only if not at 100%
          clearInterval(interval);
          setTimeout(() => {
            interval = setInterval(updateProgress, 50); // Resume after pause
          }, 1000); // Pause for 1 second at each milestone
        }
      }

      return newPercent;
    });
  }

  // Start with 0% immediately
  setLoading(0);
  let interval = setInterval(updateProgress, 50); // Update every 50ms for smooth steps

  function clear() {
    clearInterval(interval);
    setLoading(100); // Jump to 100% if cleared manually
  }

  function loaded() {
    return new Promise((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        setLoading((prev) => {
          const newPercent = Math.min(prev + 0.5, 100);
          if (newPercent >= 100) {
            clearInterval(interval);
            resolve(100);
          }
          return newPercent;
        });
      }, 50);
    });
  }

  return { loaded, clear };
};
