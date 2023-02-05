import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LeftBar from "./components/LeftBar";

import RightBar from "./components/RightBar";
import HeaderMenu from "./components/HeaderMenu";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className=" flex w-full">
      <LeftBar />
      <HeaderMenu />
      <MainSection />
      <RightBar />
    </div>
  );
}

export default App;
