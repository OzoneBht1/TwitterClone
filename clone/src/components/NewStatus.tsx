import React from "react";
import {
  UserCircleIcon,
  GifIcon,
  ServerStackIcon,
  ExclamationCircleIcon,
  FaceSmileIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const NewStatus = () => {
  return (
    <div className="p-5">
      <div className="flex text-center items-center gap-3 ">
        <UserCircleIcon className="h-14 w-14 text-blue-100" />

        <h3 className="text-2xl opacity-30">What's happening?</h3>
      </div>
      <div className="flex w-full justify-between items-center px-5 flex-wrap">
        <div className="mt-5 flex gap-3 flex-wrap ">
          <GifIcon className="h-6 w-6 text-blue-300" />
          <ServerStackIcon className="h-6 w-6 text-blue-300" />
          <ExclamationCircleIcon className="h-6 w-6 text-blue-300" />
          <FaceSmileIcon className="h-6 w-6 text-blue-300" />
          <MapPinIcon className="h-6 w-6 text-blue-300" />
        </div>
        <button className="bg-blue-400 text-white rounded-full px-4 py-2 mt-5">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default NewStatus;
