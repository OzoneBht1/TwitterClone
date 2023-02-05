import React from "react";
import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  EyeIcon,
  ShareIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import yake from "../assets/yake.jpg";

const Tweet = () => {
  return (
    <div className="p-5 border-b-2 border-slate-200 ">
      <div className="flex items-start gap-3 justify-start">
        <img
          className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={yake}
          alt="Bordered avatar"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h3 className="text-md ">Yake Paul</h3>
            <CheckBadgeIcon className="h-5 w-5" fill="#60a5fa" />
            <span className="text-sm opacity-50">@yakepaul</span>
            <span className="text-sm opacity-50">· 3hr</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquam accusantium ipsum quaerat quo cum architecto iste delectus
            laudantium adipisci sit voluptas quae vel voluptatem, facilis
            cupiditate beatae neque? Nostrum?
          </p>
          <div className="flex items-center gap-10 mt-4 opacity-40">
            <div className="flex align-center gap-3">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <span className="text-sm">234</span>
            </div>
            <div className="flex align-center gap-3">
              <ArrowPathRoundedSquareIcon className="h-5 w-5 " />
              <span className="text-sm">662</span>
            </div>
            <div className="flex align-center gap-3">
              <HeartIcon className="h-5 w-5 " />
              <span className="text-sm">23.4k</span>
            </div>
            <div className="flex align-center gap-3">
              <EyeIcon className="h-5 w-5 " />
              <span className="text-sm">4.9m</span>
            </div>
            <div className="flex align-center gap-3">
              <ShareIcon className="h-5 w-5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
