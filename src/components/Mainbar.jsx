import React from "react";

function Mainbar() {
  return (
    <>
      {/* question */}
      <div className=" shadow-lg  rounded-lg">
        <div className="w-full  bg-orange-600 rounded-t">
          <div className="flex justify-between">
            <div className="w[60%] h-[40%] px-6 py-4 text-lg text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
              aperiam unde Nisi quas aperiam unde Nisi quas aperiam unde Nisi
              quas aperiam unde
            </div>
            <div className="w-[40%]">
              <div className="rounded-lg border gap-3 mt-6  flex w-[8rem] ">
                <div className=" pl-4 text-xl text-white cursor-pointer">-</div>
                <div className="border-l py-1 border-r px-3 font-semibold text-white">
                  102
                </div>
                <div className=" cursor-pointer  text-2xl text-white">+</div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between">
            <div className="flex my-3 font-bold text-white px-6">
              <div>
                <img
                  className="h-10 rounded-full"
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt=""
                />
              </div>
              <div className="text-white py-2 mx-2">Subarna Keshari Sutar</div>
              <div className="inline-block px-2 py-2  rounded-md bg-orange-400 bg-opacity-4">
                9,308
              </div>
            </div>
            <div className="flex text-white text-xs  font-semibold px-6 py-6 gap-2 ">
              <div>
                Asked 2 years,1 months ago <span className="px-2">|</span>
              </div>
              <div>
                Active 21 days ago <span className="px-2">|</span>
              </div>
              <div>Viewes 123k times</div>
            </div>
          </div>
        </div>
        {/* <hr /> addd  */}
        <div className="px-6 py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          perferendis eveniet expedita at quam quasi, ab ut odit quibusdam non!
          Corporis reifd
        </div>
        <div className="font-serif mx-6 p-3 bg-gray-300">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
          natus labore reprehenderit consequuntur ducimus nostrum tempora sequi,
          ab laborum? Ex
        </div>
        <div className="px-6 py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          perferendis eveniet expedita at quam quasi, ab ut odit quibusdam non!
          Corporis reifd
        </div>
        <div className="flex justify-between py-3">
          <div className="flex  px-6">
            <img
              className="h-9"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/save-4897643-4081326.png?f=webp"
              alt=""
            />
            <div className="text-orange-500 text-lg py-1 font-semibold">20</div>
          </div>
          <div className="flex gap-5 px-6">
            {" "}
            <img
              className="h-6 cursor-pointer"
              src="https://pngimg.com/d/share_PNG27.png"
              alt=""
            />
            <img
              className="h-6 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex mt-5 justify-between">
        <div className="px-6 py-4">20 Answers</div>
        <div className="flex gap-5 px-6 text-xs font-medium py-5">
          <div className="text-orange-500 border-b-2 border-orange-500 font-bold">
            Votes
          </div>
          <div>Oldest</div>
          <div>Active</div>
        </div>
      </div>
      {/* answer */}
      <div className=" shadow-lg  rounded-lg py-3">
        <div className="w-full  bg-gray-200 rounded-t">
          <div className="flex justify-between">
            <div className="w[60%] h-[40%] p-6 text-sm flex  ">
              Author:{" "}
              <span className="text-orange-500 font-semibold">javed(308)</span>
              <div className="px-6">Answered : Dec 9 '19 at 8:20</div>
            </div>
            <div className="w-[40%]">
              <div className="rounded-lg border gap-3 mt-4 mr-8  float-right bg-orange-500  flex w-[8rem] ">
                <div className=" pl-4 text-xl text-white cursor-pointer">-</div>
                <div className="border-l py-1 border-r px-3 font-semibold text-white">
                  102
                </div>
                <div className=" cursor-pointer  text-2xl text-white">+</div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
        </div>
        {/* <hr /> addd  */}
        <div className="px-6 py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          perferendis eveniet expedita at quam quasi, ab ut odit quibusdam non!
          Corporis reifd Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Culpa perferendis eveniet expedita at quam quasi, ab ut odit
          quibusdam non! Corporis reifd
        </div>
        <div className="flex justify-between py-3">
          <div className="flex  px-6">
            <img
              className="h-9"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/save-4897643-4081326.png?f=webp"
              alt=""
            />
            <div className="text-orange-500 text-lg py-1 font-semibold">20</div>
          </div>
          <div className="flex gap-5 px-6">
            {" "}
            <img
              className="h-6 cursor-pointer"
              src="https://pngimg.com/d/share_PNG27.png"
              alt="reply"
            />
            <img
              className="h-6 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
              alt="save"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainbar;
