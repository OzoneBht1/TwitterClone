import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";

const RightBarElements = () => {
  return (
    <>
      <div className="flex items-start justify-between mt-5">
        <p className="text-gray-300 opacity-50">Trending in Nepal</p>
        <EllipsisHorizontalIcon className="h-6 w-6 text-blue-300" />
      </div>
      <p className="font-bold">Rabi</p>
      <p className="text-sm opacity-50">7,773 Tweets</p>
    </>
  );
};

export default RightBarElements;
