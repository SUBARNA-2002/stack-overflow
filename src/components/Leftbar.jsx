import React from "react";

function Leftbar() {
  return (
    <>
      <div className="text-xl">
        <div className="flex gap-5 py-2 px-9 cursor-pointer  ">
          <div className="py-1">
            <img
              className="h-7 bg-blend-darken"
              src="https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"
              alt="navbar-image"
            />
          </div>
          <div className="py-1 text-gray-700">Home</div>
        </div>
        <div className="flex gap-5 py-2 px-9 cursor-pointer">
          <div className="py-1">
            <img
              className="h-7 bg-blend-darken"
              src="https://img.pikbest.com/element_our/20230314/bg/50b936af08408.png!sw800"
              alt="navbar-image"
            />
          </div>
          <div className="py-1 text-gray-700">Public</div>
        </div>
        <div className=" py-2  ">
          <div className=" px-20 text-orange-500 border-r-4 border-orange-500 cursor-pointer ">Questions</div>
        </div>

        <div className="px-20 text-gray-600 cursor-pointer">Tags</div>

        <div className=" py-2 ">
          <div className="px-20 text-gray-600 cursor-pointer">Users</div>
        </div>
        <div className="flex gap-5 py-2 px-9 cursor-pointer">
          <div className="py-1">
            <img
              className="h-7 bg-blend-darken"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgY4hu1CzfNnAhKJUZZQjYQiuv3OMlSN7NbrMCTtHEBDMTXbpr9htDlygYnEToF2L7e0&usqp=CAU"
              alt="navbar-image"
            />
          </div>
          <div className="py-1 text-gray-700">Collectives</div>
        </div>
        <div className="flex gap-5 py-2 px-9 cursor-pointer ">
          <div className="py-1">
            <img
              className="h-6 bg-blend-darken"
              src="https://static.thenounproject.com/png/4185152-200.png"
              alt="navbar-image"
            />
          </div>
          <div className="py-1 text-gray-700">Jobs</div>
        </div>
      </div>
    </>
  );
}

export default Leftbar;
