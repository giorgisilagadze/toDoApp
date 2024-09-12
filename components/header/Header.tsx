"use client";

import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import Search from "./Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useToDoStore from "@/utils/ToDoStore";

export default function Header() {
  const { clearToDoes } = useToDoStore();
  const pathname = usePathname();

  const handleClear = () => {
    if (pathname == "/") {
      clearToDoes("/");
    } else {
      clearToDoes("/history");
    }
  };

  return (
    <div className="w-full px-5 pt-6 pb-5 flex flex-col gap-8">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/images/avatar.png"}
              alt={"avatar"}
              width={50}
              height={50}
            />
            <h1 className="text-[18px] text-color1 font-bold">
              Giorgi Silagadze
            </h1>
          </div>
          <IoSettingsOutline className="text-purple text-[28px]" />
        </div>
        <Search pathname={pathname} />
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div className="flex flex-col items-center gap-[2px]">
              <p className="text-[10px] text-mainColor">Tasks</p>
              <div
                className={`w-9 h-9 lg:w-[50px] lg:h-[50px] rounded-lg flex items-center justify-center lg:hover:opacity-70 duration-200 ${
                  pathname == "/" ? "bg-mainbgColor" : "bg-[#D9D9D8]"
                }`}
              >
                <MdOutlineCalendarToday className="text-[22px] lg:text-[28px] text-white" />
              </div>
            </div>
          </Link>
          <Link href={"/history"}>
            <div className="flex flex-col items-center gap-[2px]">
              <p className="text-[10px] text-mainColor">History</p>
              <div
                className={`w-9 h-9 lg:w-[50px] lg:h-[50px] rounded-lg flex items-center justify-center lg:hover:opacity-70 duration-200 ${
                  pathname == "/history" ? "bg-mainbgColor" : "bg-[#D9D9D8]"
                }`}
              >
                <RxCounterClockwiseClock className="text-[22px] lg:text-[28px] text-white" />
              </div>
            </div>
          </Link>
        </div>
        <p
          className="text-xs sm:text-sm lg:text-base text-mainColor underline cursor-pointer hover:opacity-50 duration-200"
          onClick={handleClear}
        >
          {pathname == "/" ? "Clear all Tasks" : "Clear History"}
        </p>
      </div>
    </div>
  );
}
