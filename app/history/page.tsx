"use client";

import ToDoCard from "@/components/todoCard/ToDoCard";
import useToDoStore from "@/utils/ToDoStore";

export default function History() {
  const { completedToDoes, searchValue } = useToDoStore((state) => ({
    completedToDoes: state.completedToDoes,
    searchValue: state.searchValue,
  }));
  return (
    <div className="w-full grid grid-cols-1 md600:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 px-5">
      {completedToDoes.length !== 0 ? (
        completedToDoes
          .filter((item: ToDo) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item: ToDo) => <ToDoCard item={item} key={item.id} />)
      ) : (
        <hr className="w-full h-[1px] bg-hrBg border-none" />
      )}
    </div>
  );
}
