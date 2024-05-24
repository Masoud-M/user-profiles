import { createContext, useContext, useState } from "react";
import { useGetUsers } from "../hooks/useGetUsers";
import { globalContextValues } from "../utils/types";

const GlobalContext = createContext({});

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState("page=1");
  const { status, users } = useGetUsers({ currentPage });

  const contextValue = {
    status,
    users,
    currentPage,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext) as globalContextValues;

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}

export { GlobalProvider, useGlobalContext };
