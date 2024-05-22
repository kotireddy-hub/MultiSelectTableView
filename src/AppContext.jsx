import React, { useContext, createContext, useState, useCallback } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [data, setData] = useState([]);

  const addNewData = useCallback((formData) => {
    console.log(":: addNewData ::", formData);
    setData((prevData) => [...prevData, formData]);
  }, []);

  const value = { data, addNewData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
