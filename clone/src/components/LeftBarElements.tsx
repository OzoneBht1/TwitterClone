import React from "react";

interface ILeftBarElementProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
}

const LeftBarELement = ({ title, Icon }: ILeftBarElementProps) => {
  return (
    <li className="flex w-full p-3 gap-2 items-center  hover:bg-violet-600 hover:cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
      <Icon className="h-8 w-8 lg:h-6 lg:w-6  white" />
      <h2 className="text-2xl hidden lg:block font-mono font-extralight">
        {title}
      </h2>
    </li>
  );
};

export default LeftBarELement;
