"use client";

import ToDoCard from "@/components/todoCard/ToDoCard";
import useToDoStore from "@/utils/ToDoStore";
import { useEffect } from "react";

export default function History() {
  const { toDoes, searchValue, setToDoes } = useToDoStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("toDoes");
      if (storedData) {
        setToDoes(JSON.parse(storedData));
      }
    }
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md600:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 px-5">
      {toDoes.filter((item: ToDo) => item.isActive == false).length !== 0 ? (
        toDoes
          .filter((item: ToDo) => item.isActive == false)
          .filter((item: ToDo) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item: ToDo) => <ToDoCard item={item} key={item.id} />)
      ) : (
        <hr className="w-full h-[1px] bg-hrBg border-none md600:col-span-2 sm:col-span-3 lg:col-span-4" />
      )}
    </div>
  );
}
