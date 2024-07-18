"use client";
import Image from "next/image";
import Logo from "/public/images/Logo Icon.png";
import { RightIcon, SearchIcon } from "@/icons/Icons";

import { useState } from "react";
import { sidebarData } from "./../../components/services/SidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState([]);
  const pathName = usePathname()

  const handleMenuClick = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };
  return (
    <div className="bg-[#081028] h-screen w-[300px] px-7 pt-[38.28px] border-r border-[#0B1739]">
      <div className="flex items-center gap-[6.23px]">
        <Image src={Logo} alt="loading....?" />
        <h3 className="text-white font-bold text-xl leading-[22px]">
          Dashdark X
        </h3>
      </div>
      <div className="relative mt-[41.55px]">
        <input
          type="text"
          placeholder="Search for..."
          className="bg-[#0B1739] font-medium text-xs leading-[14px] h-[42px] w-full pl-[38px] text-[#AEB9E1] outline-none border border-[#343B4F] rounded"
        />
        <span className="absolute left-[14px] top-[13px]">
          <SearchIcon />
        </span>
      </div>

      <ul className="text-[#AEB9E1] mt-[29.5px] text-sm font-medium">
        {sidebarData?.map((menu, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick(index);
            }}
            key={index}
            className=""
          >
            <div className="flex items-center justify-between">
              <Link href={menu.path} className={`${pathName ===  menu.path ? "text-[#CB3CFF] icon" : ""} flex items-center gap-x-[6px] py-[11px] `}>
                <span className="cursor-pointer "> {menu?.icon}</span>
                <span className="cursor-pointer"> {menu?.title}</span>
              </Link>
              {menu.submenu && (
                <span
                  className={`pr-[5px] cursor-pointer duration-300 transition-transform ${
                    open[index] ? "rotate-90 " : ""
                  }`}
                >
                  <RightIcon />
                </span>
              )}
            </div>
            <ul
              className={` duration-500 ease-out overflow-hidden ${
                open[index] ? "max-h-[182px] " : "max-h-0 "
              }`}
            >
              {menu.submenu &&
                menu?.submenu?.map((sub, subIndex) => (
                  <li
                    onClick={(e) => e.stopPropagation()}
                    key={subIndex}
                    className={`py-[11px] pl-[14.25px] hover:bg-[#0A1330] hover:text-white  relative group rounded-l-md

                   hover:border-[#CB3CFF]`}
                  >
                    <Link href={sub.path} className={`cursor-pointer  ${pathName === sub.path ? "text-[#CB3CFF] icon" : ""} `}>{sub?.title}</Link>
                    <span className="  group-hover:bg-[#CB3CFF] w-[3.149px] h-[42px] absolute left-0 top-0 rounded-l-md "></span>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
