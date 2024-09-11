"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full relative">
      <label
        className={`absolute left-3 top-2 text-placeholder transition-all duration-200 ease-in-out
            ${isFocused || value ? "top-[0px] text-[10px] text-blue-500" : ""}`}
      >
        Search for notes
      </label>
      <input
        className="w-full px-3 py-3 border rounded-md text-xs outline-none transition-all shadow-card"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="w-[26px] h-[26px] rounded-md flex justify-center items-center bg-mainbgColor absolute top-2 right-3">
        <CiSearch className="text-white" />
      </div>
    </div>
  );
}
