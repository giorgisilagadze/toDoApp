import { useEffect } from "react";
import { create } from "zustand";

const setLocalStorage = (key: string, value: ToDo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const useToDoStore = create<ToDoStore>((set, get) => ({
  toDoes: [],
  searchValue: "",
  addToDo: (toDo: ToDo) => {
    set((state) => {
      const updatedToDoes = [...state.toDoes, toDo];
      setLocalStorage("toDoes", updatedToDoes);
      return { toDoes: updatedToDoes };
    });
  },
  setToDoes: (toDo: ToDo[]) => {
    set(() => {
      const updatedToDoes = [...toDo];

      return { toDoes: updatedToDoes };
    });
  },
  editToDo: (toDo: ToDo) => {
    const toDoes = get().toDoes;
    const updatedToDoes = toDoes.map((item) =>
      item.id === toDo.id ? toDo : item
    );
    set(() => {
      setLocalStorage("toDoes", updatedToDoes);
      return { toDoes: updatedToDoes };
    });
  },
  completeToDo: (toDo: ToDo) => {
    const toDoes = get().toDoes;
    const changedToDoes = toDoes.map((item: ToDo) =>
      item.id == toDo.id ? { ...item, isActive: false } : item
    );
    set(() => {
      setLocalStorage("toDoes", changedToDoes);
      return {
        toDoes: changedToDoes,
      };
    });
  },
  deleteToDo: (id: number) => {
    const toDoes = get().toDoes;
    const filteredToDoes = toDoes.filter((item) => item.id !== id);
    set(() => {
      setLocalStorage("toDoes", filteredToDoes);
      return { toDoes: filteredToDoes };
    });
  },
  clearToDoes: (pathname: string) => {
    const toDoes = get().toDoes;
    let filteredToDoes: ToDo[] = [];
    if (pathname == "/") {
      filteredToDoes = toDoes.filter((item: ToDo) => item.isActive == false);
    } else if (pathname == "/history") {
      filteredToDoes = toDoes.filter((item: ToDo) => item.isActive == true);
    }
    set(() => {
      setLocalStorage("toDoes", filteredToDoes);
      return { toDoes: filteredToDoes };
    });
  },
  changeSearchValue: (text: string) => {
    set(() => ({
      searchValue: text,
    }));
  },
}));

export default useToDoStore;
