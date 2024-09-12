interface Prop {
  type: "button" | "submit" | "reset";
}

export default function ToDoButton({ type }: Prop) {
  return (
    <button
      type={type}
      className="w-full rounded-[4px] h-[34px] flex justify-center items-center bg-mainbgColor text-white text-xs cursor-pointer lg:hover:opacity-70 duration-300"
    >
      Save
    </button>
  );
}
