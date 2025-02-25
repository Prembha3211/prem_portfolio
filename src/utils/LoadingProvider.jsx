import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { setProgress } from "../components/Loading"; // Import setProgress

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  // Start the loading progress when the component mounts
  useEffect(() => {
    const { clear } = setProgress(setLoading); // Start progress and get cleanup function
    return () => clear(); // Cleanup interval on unmount
  }, [setLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
