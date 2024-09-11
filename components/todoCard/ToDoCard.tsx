"use client";

import { IoIosArrowUp } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

interface Prop {
  item: ToDo;
}

export default function ToDoCard({ item }: Prop) {
  const [isToDoVisible, setIsToDoVisible] = useState(false);
  const [pHeight, setPHeight] = useState<number>(0);

  const toDoHeight = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (toDoHeight.current && isToDoVisible) {
      setPHeight(toDoHeight.current.clientHeight);
    }
  }, [isToDoVisible]);

  return (
    <div
      className={`w-full p-3 rounded-[12px] flex flex-col  bg-white ${
        isToDoVisible ? "gap-7" : "gap-4"
      } duration-300`}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-base text-mainColor">{item.title}</p>
        <IoIosArrowUp
          className={`text-[20px] text-[#362E2F] duration-300 ${
            isToDoVisible ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setIsToDoVisible(!isToDoVisible)}
        />
      </div>

      <div
        className={`w-full overflow-hidden px-3 duration-300 bg-todoBgColor shadow-todo flex justify-center items-center`}
        style={{
          height: isToDoVisible ? `${pHeight + 24}px` : "0px",
        }}
      >
        <p className={`text-todoColor text-xs font-semibold`} ref={toDoHeight}>
          {item.todo}
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuPencilLine className="text-[20px] text-[#362E2F]" />
          <RiDeleteBin6Line className="text-[20px] text-[#F58786]" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs text-todoColor font-medium">Mark completed</p>
          <FaRegCircleCheck className="text-[20px] text-[#88DEA2]" />
        </div>
      </div>
    </div>
  );
}
