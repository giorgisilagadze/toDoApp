"use client";

import useToDoStore from "@/utils/ToDoStore";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const { searchValue, changeSearchValue } = useToDoStore();

  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    changeSearchValue(value);
  };

  return (
    <div className="w-full sm:w-[50%] relative">
      <label
        htmlFor="searchInput"
        className={`absolute left-3  text-placeholder transition-all duration-200 ease-in-out
            ${
              isFocused || searchValue
                ? "top-[0px] text-[10px]"
                : "text-xs top-[14px]"
            }`}
      >
        Search for notes
      </label>
      <input
        id="searchInput"
        className="w-full px-3 py-3 border rounded-md text-xs outline-none transition-all shadow-card"
        value={searchValue}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="w-[26px] h-[26px] rounded-md flex justify-center items-center bg-mainbgColor absolute top-2 right-3">
        <CiSearch className="text-white" />
      </div>
    </div>
  );
}
