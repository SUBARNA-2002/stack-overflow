import React from "react";
import { useNavigate } from "react-router-dom";
function Rightbar({ related,linked }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/question/${id}`);
  };
  //   console.log(questions);
  return (
    <>
        <div className="text-gray-800 text-xl px-2 py-2 border-b-4 border-gray-500">Linked</div>
      <div className="h-[41%] overflow-y-auto ">
        
        {linked.map((e) => {
          return (
            <>
              <div onClick={() => handleClick(e.question_id)} className=" mx-2 flex my-2 cursor-pointer">
                <div className="  w-12 p-3  py-2 h-10 bg-orange-600 text-white">
                  {e.score}
                </div>
                <div className="w-[18rem] px-2">{e.title}</div>
              </div>
            </>
          );
        })}
      </div>

      {/* Related */}

      <div className="text-xl px-2 py-2 text-gray-800 border-b-4 border-gray-500">Related</div>
      <div className="h-[45%] overflow-y-auto">
        {related.map((el) => {
          return (
            <>
              <div
                onClick={() => handleClick(el.question_id)}
                className=" mx-2 flex my-2 cursor-pointer"
              >
                <div className=" w-12 p-3  py-2 h-10 bg-orange-600 text-white">
                  {el.score}
                </div>
                <div className="w-[18rem] px-2">{el.title}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Rightbar;
