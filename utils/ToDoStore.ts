import { useEffect } from "react";
import { create } from "zustand";

const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
};

const setLocalStorage = (key: string, value: ToDo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const useToDoStore = create<ToDoStore>((set, get) => ({
  toDoes: getLocalStorage("toDoes"),
  completedToDoes: getLocalStorage("completedToDoes"),
  searchValue: "",
  addToDo: (toDo: ToDo) => {
    set((state) => {
      const updatedToDoes = [...state.toDoes, toDo];
      setLocalStorage("toDoes", updatedToDoes);
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
    const filteredToDoes = toDoes.filter((item) => item.id !== toDo.id);
    set((state) => {
      const updatedCompletedToDoes = [
        ...state.completedToDoes,
        { ...toDo, isActive: false },
      ];
      setLocalStorage("toDoes", filteredToDoes);
      setLocalStorage("completedToDoes", updatedCompletedToDoes);
      return {
        toDoes: filteredToDoes,
        completedToDoes: updatedCompletedToDoes,
      };
    });
  },
  deleteActiveToDo: (id: number) => {
    const toDoes = get().toDoes;
    const filteredToDoes = toDoes.filter((item) => item.id !== id);
    set(() => {
      setLocalStorage("toDoes", filteredToDoes);
      return { toDoes: filteredToDoes };
    });
  },
  deleteCompletedToDo: (id: number) => {
    const completedToDoes = get().completedToDoes;
    const filteredCompletedToDoes = completedToDoes.filter(
      (item) => item.id !== id
    );
    set(() => {
      setLocalStorage("completedToDoes", filteredCompletedToDoes);
      return { completedToDoes: filteredCompletedToDoes };
    });
  },
  clearAllActiveToDoes: () => {
    set(() => {
      setLocalStorage("toDoes", []);
      return { toDoes: [] };
    });
  },
  clearAllCompletedToDoes: () => {
    set(() => {
      setLocalStorage("completedToDoes", []);
      return { completedToDoes: [] };
    });
  },
  changeSearchValue: (text: string) => {
    set(() => ({
      searchValue: text,
    }));
  },
}));

export default useToDoStore;
