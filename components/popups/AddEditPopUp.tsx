"use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// import { InputHTMLAttributes, useEffect, useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import ToDoButton from "../buttons/ToDoButton";
// import useToDoStore from "@/utils/ToDoStore";

// // const schema = yup
// //   .object({
// //     title: yup.string().required("enter the task title"),
// //     todo: yup.string().required("enter the task"),
// //   })
// //   .required();

// interface Props {
//   isPopUpVisible: boolean;
//   setIsPopUpVisible: (isPopUpVisible: boolean) => void;
//   title: string;
//   item?: ToDo;
// }

// export default function AddEditPopUp({
//   isPopUpVisible,
//   setIsPopUpVisible,
//   title,
//   item,
// }: Props) {
//   const { addToDo, toDoes, editToDo } = useToDoStore((state) => ({
//     addToDo: state.addToDo,
//     toDoes: state.toDoes,
//     editToDo: state.editToDo,
//   }));

//   // type FormData = yup.InferType<typeof schema>;

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm({
//   //   resolver: yupResolver(schema),
//   // });

//   const [isFocused, setIsFocused] = useState(false);
//   const [errors, setErrors] = useState({
//     title: "",
//     todo: "",
//   });
//   const [toDo, setToDo] = useState<ToDo>({
//     id: 0,
//     title: "",
//     todo: "",
//     isActive: true,
//   });

//   useEffect(() => {
//     if (item && isPopUpVisible) {
//       setToDo({
//         id: item.id,
//         title: item.title,
//         todo: item.todo,
//         isActive: item.isActive,
//       });
//     } else if (!item && isPopUpVisible) {
//       setToDo({
//         id: 0,
//         title: "",
//         todo: "",
//         isActive: true,
//       });
//     }
//   }, [item, isPopUpVisible]);

//   const handleOnChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setToDo({ ...toDo, [name]: value });
//   };

//   const handleClose = () => {
//     setIsPopUpVisible(false);
//     setErrors({ ...errors, title: "", todo: "" });
//     setTimeout(() => {
//       setToDo({ ...toDo, id: 0, title: "", todo: "", isActive: true });
//     }, 300);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (toDo.title !== "" && toDo.todo !== "") {
//       const newToDo: ToDo = {
//         id: item ? item.id : Date.now(),
//         // title: data.title,
//         // todo: data.todo,
//         title: toDo.title,
//         todo: toDo.todo,
//         isActive: item ? item.isActive : true,
//       };

//       if (item) {
//         editToDo(newToDo);
//       } else {
//         addToDo(newToDo);
//       }
//       handleClose();
//     } else if (toDo.title !== "" && toDo.todo == "") {
//       setErrors({ ...errors, todo: "Enter the task" });
//     } else if (toDo.title == "" && toDo.todo !== "") {
//       setErrors({ ...errors, title: "Enter the task name" });
//     } else if (toDo.title == "" && toDo.todo == "") {
//       setErrors({
//         ...errors,
//         title: "Enter the task name",
//         todo: "Enter the task",
//       });
//     }
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full  flex justify-center items-center transition-opacity ${
//         isPopUpVisible
//           ? "bg-popUpBg opacity-100 z-[50] duration-500"
//           : "bg-transparent opacity-0 -z-10 duration-300"
//       }`}
//     >
//       <div
//         className={`absolute top-0 left-0 w-full h-full z-[50]`}
//         onClick={handleClose}
//       ></div>
//       <form
//         className="w-[90%] md600:w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[35%] p-3 rounded-xl bg-todoBgColor flex flex-col gap-3 z-[51]"
//         // onSubmit={handleSubmit(onSubmit)}
//         onSubmit={onSubmit}
//       >
//         <div className="w-full flex items-center justify-between">
//           <div className="w-[18px]"></div>
//           <p className="text-xs lg:text-sm font-bold text-mainColor">{title}</p>
//           <RxCross2
//             className="text-[18px] lg:text-[24px] text-mainColor cursor-pointer lg:hover:opacity-45 duration-200"
//             onClick={handleClose}
//           />
//         </div>
//         <div className="w-full relative flex flex-col gap-[2px]">
//           <label
//             htmlFor="title"
//             className={`absolute left-3 top-2 text-placeholder transition-all duration-200 ease-in-out
//             ${
//               isFocused || toDo.title !== ""
//                 ? "top-[0px] text-[9px] text-blue-500"
//                 : "text-sm"
//             }`}
//           >
//             Task Name
//           </label>
//           <input
//             id="title"
//             className="w-full px-3 pt-3 pb-2 border border-mainBorder rounded-md text-xs outline-none transition-all shadow-card"
//             value={toDo.title}
//             // {...register("title")}
//             onChange={handleOnChange}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             name="title"
//           />
//           {errors.title !== "" && (
//             <p className="text-[10px] text-[red]">{errors.title}</p>
//           )}
//         </div>
//         <div className="flex flex-col gap-[2px]">
//           <textarea
//             className="w-full resize-none px-3 py-4 bg-todoChildBgColor shadow-todo text-todoColor placeholder:text-todoColor text-xs font-semibold h-[100px] outline-none"
//             placeholder="Type task details here..."
//             value={toDo.todo}
//             // {...register("todo")}
//             onChange={handleOnChange}
//             name="todo"
//           />
//           {errors.todo !== "" && (
//             <p className="text-[10px] text-[red]">{errors.todo}</p>
//           )}
//         </div>

//         <ToDoButton type="submit" />
//       </form>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ToDoButton from "../buttons/ToDoButton";
import useToDoStore from "@/utils/ToDoStore";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    todo: yup.string().required("Task details are required"),
  })
  .required();

interface ToDo {
  id: number;
  title: string;
  todo: string;
  isActive: boolean;
}

interface Props {
  isPopUpVisible: boolean;
  setIsPopUpVisible: (isPopUpVisible: boolean) => void;
  title: string;
  item?: ToDo;
}

export default function AddEditPopUp({
  isPopUpVisible,
  setIsPopUpVisible,
  title,
  item,
}: Props) {
  const { addToDo, editToDo } = useToDoStore((state) => ({
    addToDo: state.addToDo,
    editToDo: state.editToDo,
  }));

  const [isFocus, setIsFocus] = useState(false);

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    trigger,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: item?.title || "",
      todo: item?.todo || "",
    },
  });

  useEffect(() => {
    if (item) {
      setValue("title", item.title);
      setValue("todo", item.todo);
    } else {
      reset();
      clearErrors();
    }
  }, [item, setValue, reset]);

  const onSubmit = async (data: FormData) => {
    const isValid = await trigger();
    if (isValid) {
      const toDo: ToDo = {
        id: item ? item.id : Date.now(),
        title: data.title,
        todo: data.todo,
        isActive: item ? item.isActive : true,
      };

      if (item) {
        editToDo(toDo);
      } else {
        addToDo(toDo);
      }
      handleClose();
    }
  };

  const handleClose = () => {
    reset();
    clearErrors();
    setIsPopUpVisible(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center transition-opacity ${
        isPopUpVisible
          ? "bg-popUpBg opacity-100 z-[50] duration-500"
          : "bg-transparent opacity-0 -z-10 duration-300"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-[50]`}
        onClick={handleClose}
      ></div>
      <div className="w-[90%] md600:w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[35%] p-3 rounded-xl bg-todoBgColor flex flex-col gap-3 z-[51]">
        <div className="w-full flex items-center justify-between">
          <div className="w-[18px]"></div>
          <p className="text-xs font-bold text-mainColor">{title}</p>
          <RxCross2
            className="text-[18px] text-mainColor"
            onClick={handleClose}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          <div className="w-full relative flex flex-col gap-[2px]">
            <label
              className={`absolute left-3 top-2 text-placeholder transition-all duration-200 ease-in-out ${
                isFocus || watch("title") !== ""
                  ? "top-[0px] text-[9px] text-blue-500"
                  : "text-sm"
              }`}
            >
              Task Name
            </label>
            <input
              className="w-full px-3 pt-3 pb-2 border border-mainBorder rounded-md text-xs outline-none transition-all shadow-card"
              {...register("title")}
              onBlur={() => setIsFocus(false)}
              onFocus={() => setIsFocus(true)}
            />
            {errors.title && (
              <p className="text-[red] text-[10px]">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[2px]">
            <textarea
              className="w-full resize-none px-3 py-4 bg-todoChildBgColor shadow-todo text-todoColor placeholder:text-todoColor text-xs font-semibold h-[100px] outline-none"
              placeholder="Type task details here..."
              {...register("todo")}
            />
            {errors.todo && (
              <p className="text-[red] text-[10px]">{errors.todo.message}</p>
            )}
          </div>
          <ToDoButton type="submit" />
        </form>
      </div>
    </div>
  );
}
