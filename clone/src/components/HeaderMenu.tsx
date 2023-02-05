import React from "react";

const HeaderMenu = () => {
  const [active, setActive] = React.useState(0);
  const activeClass =
    "border-b-8 border-blue-400 absolute left-1/2 top whitespace-nowrap";
  const inactiveClass = "border-b-4 border-transparent absolute left-1/2 top";

  return (
    <div>
      <h1 className="font-bold text-2xl mt-4 mb-6"> Home</h1>
      <div className="flex justify-between text-center px-10">
        <div
          className=" sm:w-1/2 relative hover:cursor-pointer hover:bg-white"
          onClick={() => setActive(0)}
        >
          <p className={active === 0 ? activeClass : inactiveClass}>For you</p>
        </div>
        <div className="w-1/2 relative hover:cursor-pointer">
          <p
            className={active === 1 ? activeClass : inactiveClass}
            onClick={() => setActive(1)}
          >
            Following
          </p>
        </div>
      </div>
      <hr className="mt-8 border-slate-200"></hr>
    </div>
  );
};

export default HeaderMenu;
