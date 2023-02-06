import React from "react";
import Feed from "./Feed";
import HeaderMenu from "./HeaderMenu";
import NewStatus from "./NewStatus";

const MainSection = () => {
  return (
    <div className="flex-co w-2/5 bg-black border-x border-slate-200 border-opacity-50 text-white ">
      <HeaderMenu />
      <NewStatus />
      <hr className="border-slate-200 border-opacity-50"></hr>
      <Feed />
    </div>
  );
};

export default MainSection;
