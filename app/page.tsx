"use client";

import { GoPlus } from "react-icons/go";

import ToDoCard from "@/components/todoCard/ToDoCard";
import AddEditCard from "@/components/popups/AddEditCard";
import { useState } from "react";

const data: ToDo[] = [
  {
    id: 1,
    title: "make this project!",
    todo: "I should make this, I should make this, I should make this, fafmal;fma fas f afa fa",
    isActive: true,
  },
  {
    id: 2,
    title: "make this project!",
    todo: "I should make this, I should make this, I should make this, fafmal;fma fas f afa fa afskmafknakfnaklnaklsnga safas afasf",
    isActive: true,
  },
  {
    id: 3,
    title: "make this project!",
    todo: "I should make this, I should make this, I should make this, fafmal;fma fas f afa fa fafqwfq qfwqfqf qfqf",
    isActive: true,
  },
  {
    id: 4,
    title: "make this project!",
    todo: "I should make this, I should make this, I should make this, fafmal;fma fas f afa fa qfwqf qfqwf qwfqf",
    isActive: true,
  },
];

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col gap-3 px-5">
        {data.map((item: ToDo) => (
          <ToDoCard item={item} key={item.id} />
        ))}
        <div
          className="w-[52px] h-[52px] rounded-[50%] flex items-center justify-center bg-mainbgColor fixed bottom-8 left-[50%] translate-x-[-50%] shadow-card"
          onClick={() => setIsPopUpVisible(true)}
        >
          <GoPlus className="text-[28px] text-white" />
        </div>
      </div>
      <AddEditCard
        isPopUpVisible={isPopUpVisible}
        setIsPopUpVisible={setIsPopUpVisible}
      />
    </>
  );
}
