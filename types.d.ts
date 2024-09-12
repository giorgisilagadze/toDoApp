interface ToDo {
  id: number;
  title: string;
  todo: string;
  isActive: boolean;
}

interface ToDoStore {
  toDoes: ToDo[];
  completedToDoes: ToDo[];
  searchValue: string;
  addToDo: (toDo: ToDo) => void;
  editToDo: (toDo: ToDo) => void;
  completeToDo: (toDo: ToDo) => void;
  deleteActiveToDo: (id: number) => void;
  deleteCompletedToDo: (id: number) => void;
  clearAllActiveToDoes: () => void;
  clearAllCompletedToDoes: () => void;
  changeSearchValue: (text: string) => void;
}
