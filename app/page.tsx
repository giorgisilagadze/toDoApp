"use client";

import { GoPlus } from "react-icons/go";

import ToDoCard from "@/components/todoCard/ToDoCard";
import AddEditCard from "@/components/popups/AddEditPopUp";
import { useEffect, useState } from "react";
import useToDoStore from "@/utils/ToDoStore";
import useScreenSize from "@/hooks/useScreenSize";

export default function Home() {
  const { toDoes, searchValue } = useToDoStore((state) => ({
    toDoes: state.toDoes,
    searchValue: state.searchValue,
  }));

  const screenSize = useScreenSize();

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  return (
    <>
      <div className="w-full grid grid-cols-1 md600:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 px-5 pb-5">
        {toDoes.length !== 0 ? (
          toDoes
            .filter((item: ToDo) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item: ToDo) => <ToDoCard item={item} key={item.id} />)
        ) : (
          <hr className="w-full h-[1px] bg-hrBg border-none md600:col-span-2 sm:col-span-3 lg:col-span-4" />
        )}
        <div
          className="w-[52px] h-[52px] cursor-pointer lg:hover:opacity-70  lg:hover:shadow-button duration-300 rounded-[50%] flex items-center justify-center bg-mainbgColor fixed bottom-8 left-[50%] translate-x-[-50%] shadow-card"
          onClick={() => setIsPopUpVisible(true)}
        >
          <GoPlus className="text-[28px] text-white" />
        </div>
      </div>
      <AddEditCard
        isPopUpVisible={isPopUpVisible}
        setIsPopUpVisible={setIsPopUpVisible}
        title="Create task"
      />
    </>
  );
}
