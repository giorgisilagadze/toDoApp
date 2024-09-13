"use client";

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
  const { addToDo, editToDo } = useToDoStore();

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
      reset({
        title: item.title,
        todo: item.todo,
      });
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

  console.log(isFocus, "isFocuuus");

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
          <p className="text-xs lg:text-sm font-bold text-mainColor">{title}</p>
          <RxCross2
            className="text-[18px] lg:text-[24px] text-mainColor cursor-pointer lg:hover:opacity-45 duration-200"
            onClick={handleClose}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          <div className="w-full relative flex flex-col gap-[2px]">
            <label
              htmlFor="title"
              className={`absolute left-3 text-placeholder transition-all duration-200 ease-in-out pointer-events-none ${
                isFocus || watch("title") !== ""
                  ? "top-0 text-[9px]"
                  : "top-[8px] text-sm"
              }`}
            >
              Task Name
            </label>
            <input
              id="title"
              className="w-full px-3 pt-3 pb-2 border border-mainBorder rounded-md text-xs outline-none transition-all shadow-card"
              {...register("title")}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
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
