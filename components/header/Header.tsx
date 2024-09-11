"use client";

import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import Search from "./Search";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
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
        <Search />
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div className="flex flex-col items-center gap-[2px]">
              <p className="text-[10px] text-mainColor">Tasks</p>
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  pathname == "/" ? "bg-mainbgColor" : "bg-[#D9D9D8]"
                }`}
              >
                <MdOutlineCalendarToday className="text-[22px] text-white" />
              </div>
            </div>
          </Link>
          <Link href={"/history"}>
            <div className="flex flex-col items-center gap-[2px]">
              <p className="text-[10px] text-mainColor">History</p>
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  pathname == "/history" ? "bg-mainbgColor" : "bg-[#D9D9D8]"
                }`}
              >
                <RxCounterClockwiseClock className="text-[22px] text-white" />
              </div>
            </div>
          </Link>
        </div>
        <p className="text-xs text-mainColor underline cursor-pointer hover:opacity-50 duration-200">
          Clear all Tasks
        </p>
      </div>
    </div>
  );
}
