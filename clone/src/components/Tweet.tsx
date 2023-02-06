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

interface ITweet {
  username: string;
  image: string;
  handle: string;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
  views: number;
}

const Tweet = (props: ITweet) => {
  return (
    <div className="p-5 border-b-2 border-slate-200 border-opacity-50 ">
      <div className="flex items-start gap-3 justify-start">
        <img
          className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={props.image}
          alt="Bordered avatar"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h3 className="text-md ">{props.username}</h3>
            <CheckBadgeIcon className="h-5 w-5" fill="#60a5fa" />
            <span className="text-sm opacity-50">{props.handle}</span>
            <span className="text-sm opacity-50">
              {new Date().toISOString().slice(0, 10) +
                ", " +
                new Date().toLocaleTimeString().slice(0, 4)}
            </span>
          </div>
          <p>{props.content}</p>
          <div className="flex items-center gap-10 mt-4 opacity-40">
            <div className="flex align-center gap-3">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <span className="text-sm">{props.comments}</span>
            </div>
            <div className="flex align-center gap-3">
              <ArrowPathRoundedSquareIcon className="h-5 w-5 " />
              <span className="text-sm">{props.retweets}</span>
            </div>
            <div className="flex align-center gap-3">
              <HeartIcon className="h-5 w-5 " />
              <span className="text-sm">{props.likes}</span>
            </div>
            <div className="flex align-center gap-3">
              <EyeIcon className="h-5 w-5 " />
              <span className="text-sm">{props.views}</span>
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
