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
    <li className="flex w-full p-3 gap-2 items-center  hover:bg-blue-400 hover:cursor-pointer active:bg-blue-400 focus:outline-none focus:ring focus:bg-blue-400">
      <Icon className="h-8 w-8 lg:h-6 lg:w-6  white" />
      <h2 className="text-2xl hidden lg:block font-sans font-extralight">
        {title}
      </h2>
    </li>
  );
};

export default LeftBarELement;
