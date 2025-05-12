"use client";

import { FaSearch } from "react-icons/fa";

export default function SearchBar({ city, setCity, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
      setCity("");
    }
  };

  const handleClick = () => {
    onSearch();
    setCity("");
  };

  return (
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-2xl p-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search City or Pincode"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-2 bg-transparent outline-none text-white placeholder-white"
      />
      <button onClick={handleClick} className="text-white">
        <FaSearch />
      </button>
    </div>
  );
}
