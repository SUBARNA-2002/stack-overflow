import React from "react";
import Leftbar from "../components/Leftbar";
import Mainbar from "../components/Mainbar";
import Rightbar from "../components/Rightbar";
import QuestionDetail from "../components/QuestionDetail";

function Detail() {
  return (
    <>
      <div className="flex h-full gap-3 px-5 ">
        <div className="w-[15%]  h-[88vh] ">
          <Leftbar/>
        </div>
        <div className="w-[60%] px-2  h-[88vh] overflow-y-auto overflow-hidden py-4"><QuestionDetail/></div>
        <div className="w-[25%]  h-[88vh] py-2 px-6"> <Rightbar/></div>
      </div>
    </>
  );
}

export default Detail;
