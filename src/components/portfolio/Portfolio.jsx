import React from "react";
import portOne from "../../assets/images/port1.png";
import portTwo from "../../assets/images/port2.png";
import portThree from "../../assets/images/port3.png";
export default function () {
  let currentImg = (e) => {
    document.querySelector(".currentImgLayOut").classList.remove("hidden");
    document.querySelector(".currentImg").setAttribute("src", e.currentTarget.previousElementSibling.src);
    console.log(e.currentTarget.previousElementSibling.src);
  }
  let closeImg = () => {
    document.querySelector(".currentImgLayOut").classList.add("hidden");
  }


  return (
    <div className="text-[#2c3e50] mt-8">
      <div className="container mx-auto">

        <div onClick={() => { closeImg() }} className=" currentImgLayOut fixed top-0 bottom-0 left-0 right-0 z-20 bg-blue-500 bg-opacity-30 hidden">
          <img onClick={(e) => { e.stopPropagation() }} className="currentImg w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  " src={portOne} alt="portOne" />
        </div>
        <h2 className="text-5xl font-semibold uppercase">portfolio component</h2>
        <div className="h-1 w-20 bg-[#2c3e50] inline-block -translate-y-1/2"></div>
        <i className="fa-solid fa-star mx-5"></i>
        <div className="h-1 w-20 bg-[#2c3e50] inline-block"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[70%] mx-auto mt-7 mb-24">


          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portOne} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>
          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portTwo} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>
          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portThree} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>
          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portOne} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>
          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portTwo} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>
          <div className="portCard relative rounded-xl overflow-hidden group">
            <img className="w-full rounded-xl" src={portThree} alt="portOne" />
            <div onClick={(e) => { currentImg(e) }} className="layout">
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <i className="fa-solid fa-plus text-transparent text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-transform duration-300 ease-in-out"></i>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
