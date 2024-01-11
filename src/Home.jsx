import React from "react";
import Leftbar from "./components/Leftbar";
import Mainbar from "./components/Mainbar";

function Home() {
  return (
    <>
      <div className="flex h-full gap-3 px-5 py-2">
        <div className="w-[20%]   h-[90vh]">
          <Leftbar/>
        </div>
        <div className="w-[60%]  bg-blue-gray-400 h-[90vh]"><Mainbar/></div>
        <div className="w-[20%]  bg-deep-orange-300 h-[90vh]"> right-bar</div>
      </div>
    </>
  );
}

export default Home;
