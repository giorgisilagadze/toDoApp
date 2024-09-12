"use client";

import { IoIosArrowUp } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import AddEditCard from "../popups/AddEditPopUp";
import useToDoStore from "@/utils/ToDoStore";

interface Prop {
  item: ToDo;
}

export default function ToDoCard({ item }: Prop) {
  const { completeToDo, deleteToDo } = useToDoStore((state) => ({
    completeToDo: state.completeToDo,
    deleteToDo: state.deleteToDo,
  }));

  const [isToDoVisible, setIsToDoVisible] = useState(false);
  const [pHeight, setPHeight] = useState<number>(0);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [editToDo, setEditToDo] = useState<ToDo>();

  const toDoHeight = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (toDoHeight.current && isToDoVisible) {
      setPHeight(toDoHeight.current.clientHeight);
    }
  }, [isToDoVisible]);

  return (
    <>
      <div
        className={`w-full p-3 rounded-[12px] flex flex-col bg-todoBgColor ${
          isToDoVisible
            ? "gap-7"
            : !isToDoVisible && item.isActive
            ? "gap-4"
            : !isToDoVisible && !item.isActive && "gap-0"
        } duration-300`}
      >
        <div
          className="w-full flex items-center justify-between cursor-pointer select-none"
          onClick={() => setIsToDoVisible(!isToDoVisible)}
        >
          <div className="flex items-center gap-1">
            <p className="text-base text-mainColor">{item.title}</p>
            <FaRegCircleCheck
              className={`text-[20px] text-[#88DEA2] ${
                !isToDoVisible && !item.isActive ? "opacity-100" : "opacity-0"
              } duration-200`}
            />
          </div>
          <IoIosArrowUp
            className={`text-[20px] text-[#362E2F] duration-300 ${
              isToDoVisible ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        <div
          className={`w-full overflow-hidden px-3 duration-300 bg-todoChildBgColor shadow-todo flex items-center`}
          style={{
            height: isToDoVisible ? `${pHeight + 24}px` : "0px",
          }}
        >
          <p
            className={`text-todoColor text-xs lg:text-sm font-semibold`}
            ref={toDoHeight}
          >
            {item.todo}
          </p>
        </div>

        {isToDoVisible && !item.isActive ? (
          <div className="w-full flex items-center justify-between">
            <RiDeleteBin6Line
              className="text-[20px] text-[#F58786] cursor-pointer lg:hover:opacity-50 duration-200"
              onClick={() => deleteToDo(item.id)}
            />
            <div className="flex items-center gap-1">
              <p className="text-xs text-todoColor font-medium">Completed</p>
              <FaRegCircleCheck className="text-[20px] text-[#88DEA2]" />
            </div>
          </div>
        ) : (isToDoVisible && item.isActive) ||
          (!isToDoVisible && item.isActive) ? (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LuPencilLine
                className="text-[20px] text-[#362E2F] cursor-pointer lg:hover:opacity-50 duration-200"
                onClick={() => {
                  setIsPopUpVisible(true);
                  setEditToDo(item);
                }}
              />
              <RiDeleteBin6Line
                className="text-[20px] text-[#F58786] cursor-pointer lg:hover:opacity-50 duration-200"
                onClick={() => deleteToDo(item.id)}
              />
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer lg:hover:opacity-50 duration-200"
              onClick={() => completeToDo(item)}
            >
              <p className="text-xs text-todoColor font-medium">
                Mark completed
              </p>
              <FaRegCircleCheck className="text-[20px] text-[#88DEA2]" />
            </div>
          </div>
        ) : null}
      </div>
      <AddEditCard
        isPopUpVisible={isPopUpVisible}
        setIsPopUpVisible={setIsPopUpVisible}
        title="Edit task"
        item={editToDo}
      />
    </>
  );
}
