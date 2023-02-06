import React from "react";
import {
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import RightBarElements from "./RightBarElements";

const RightBar = () => {
  return (
    <div className="flex-col m-0 sticky justify-start right-0 top-0  bg-black text-white h-screen flex-1 pl-5 pt-2">
      <div className="hidden lg:flex items-left gap-3  p-2 w-3/5 bg-rightbar rounded-3xl items-center">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-300" />
        <p className="text-gray-300">Search Twitter</p>
      </div>
      <div className="hidden lg:flex flex-col items-left p-4 w-3/5 bg-rightbar rounded-3xl mt-5 gap-1 ">
        <h1 className="font-extrabold text-lg">Trends For You</h1>
        <RightBarElements />
        <RightBarElements />
        <RightBarElements />
        <RightBarElements />
        <RightBarElements />
        <RightBarElements />
      </div>
    </div>
  );
};

export default RightBar;
