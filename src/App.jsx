import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./constants";
import { LoadingProvider, useLoading } from "./utils/LoadingProvider";

const MainContent = () => {
  const { isLoading } = useLoading();

  if (isLoading) return null; // Hide content until loading is done

  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Project />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <MainContent />
          </div>
        </div>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;
