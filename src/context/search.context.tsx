"use client";

import { IProduct } from "@/types/types";
import { api } from "@/utils/axios";
import axios from "axios";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextType {
  query: string;
  results: IProduct[];
  handleSearch: (searchTerm: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<IProduct[]>([]);

  const handleSearch = async (searchTerm: string) => {
    setQuery(searchTerm);

    try {
      const response = await api.get(
        `/products/?product_name_like=${searchTerm}`
      );
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results", error);
      setResults([]);
    }
  };

  return (
    <SearchContext.Provider value={{ query, results, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch mus within a searchProvider");
  }
  return context;
};
