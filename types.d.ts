interface ToDo {
  id: number;
  title: string;
  todo: string;
  isActive: boolean;
}

interface ToDoStore {
  toDoes: ToDo[];
  searchValue: string;
  addToDo: (toDo: ToDo) => void;
  setToDoes: (toDo: ToDo[]) => void;
  editToDo: (toDo: ToDo) => void;
  completeToDo: (toDo: ToDo) => void;
  deleteToDo: (id: number) => void;
  clearToDoes: (pathname: string) => void;
  changeSearchValue: (text: string) => void;
}
