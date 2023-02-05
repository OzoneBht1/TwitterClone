import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/solid";
import LeftBarELement from "./LeftBarElements";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

const NAV_ELEMENTS_MAP = [
  {
    title: "Home",
    icon: HomeIcon,
  },
  {
    title: "Explore",
    icon: HashtagIcon,
  },
  {
    title: "Notifications",
    icon: BellIcon,
  },
  {
    title: "Messages",
    icon: EnvelopeIcon,
  },
  {
    title: "Bookmarks",
    icon: BookmarkIcon,
  },
  {
    title: "Lists",
    icon: DocumentIcon,
  },
  {
    title: "Profile",
    icon: UserIcon,
  },
  {
    title: "More",
    icon: EllipsisHorizontalCircleIcon,
  },
];

const LeftBar = () => {
  return (
    <div className="flex m-0 justify-end sticky top-0 left-0 bg-black text-white h-screen w-1/5 lg:w-1/4">
      <div className="flex flex-col justify-between h-full w-20 lg:w-64 self-end p-3">
        <ul className="flex flex-col items-start">
          <li className="flex w-full p-3 gap-2 items-center">
            <CpuChipIcon className="h-12 w-12 lg:h-10 lg:w-10  white" />
          </li>
          {NAV_ELEMENTS_MAP.map((element) => (
            <LeftBarELement
              key={element.title}
              title={element.title}
              Icon={element.icon}
            />
          ))}
          <li className="flex w-full p-3 gap-2 items-center">
            <button className=" w-full bg-blue-400 px-5 py-3 rounded-3xl font-bold hidden lg:block">
              Tweet
            </button>
            <button className="bg-blue-400 w-full  rounded-full font-bold block lg:hidden">
              <PlusIcon className="h-8 w-8" />
            </button>
          </li>
        </ul>
        <div className="flex self-end lg:self-auto items-center gap-2">
          <UserCircleIcon className="h-10 w-10 lg:h-12 lg:w-12  white" />
          <div className="flex-col ">
            <h2 className="text-base hidden lg:block font-sans font-extralight">
              OzoneBht
            </h2>
            <h2 className="text-sm hidden lg:block font-sans font-extralight text-slate-500">
              @Ozone_Bhattarai
            </h2>
          </div>
          <EllipsisHorizontalIcon className="h-8 w-8 lg:h-8 lg:w-8  white hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
