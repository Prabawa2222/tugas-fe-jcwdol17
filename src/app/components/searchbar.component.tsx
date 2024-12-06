"use client";

import { useSearch } from "@/context/search.context";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const { handleSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={onSearch}>
      <input
        className="w-full p-2 rounded-lg"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
    </form>
  );
};

export default SearchBar;
