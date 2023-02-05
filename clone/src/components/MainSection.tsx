import React from "react";
import Feed from "./Feed";
import HeaderMenu from "./HeaderMenu";
import NewStatus from "./NewStatus";

const MainSection = () => {
  return (
    <div className="flex-co w-1/2 bg-black border-x border-grey-100 text-white ">
      <HeaderMenu />
      <NewStatus />
      <hr className="border-slate-200   "></hr>
      <Feed />
    </div>
  );
};

export default MainSection;
