import React from "react";
import Leftbar from "./components/Leftbar";
import Mainbar from "./components/Mainbar";

function Home() {
  return (
    <>
      <div className="flex h-full gap-3 px-5 py-2">
        <div className="w-[15%]  h-[90vh]">
          <Leftbar/>
        </div>
        <div className="w-[60%] px-2  h-[90vh] overflow-y-auto overflow-hidden"><Mainbar/></div>
        <div className="w-[25%]  bg-deep-orange-300 h-[90vh]"> right-bar</div>
      </div>
    </>
  );
}

export default Home;
