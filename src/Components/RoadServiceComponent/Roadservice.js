import React from 'react';

export default function Roadservice() {
  return (
    <>
      <div
        id="maincontainer"
        className="flex flex-col-reverse lg:flex-row pt-12 "
      >
        <div id="firstmain" className="bg-Darkblue flex lg:flex-row flex-col ">
          <div
            id="firtmaininner"
            className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
          >
            <h1 className="text-white text-heading font-heading lg:text-2xl 2xl:px-4 px-0">  
              24/7 Road Service
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white font-desc 2xl:text-xl text-descnew lg:text-base md:text-sm 2xl:px-4 px-0"
            >
              We understand the value of your time. Hence to minimize delays and
              improve downtime, we offer 24*7 roadside assistance, even in
              remote areas. A vast vendor network spread across British Columbia
              and an impressive team of tire specialists enable us to respond
              efficiently and keep you always on the go.
            </p>
            <div>
              <button className="text-white bg-yellow-bg  font-semibold  mt-4 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md 2xl:ml-0 ml-6 2xl:p-0 p-4">
                Inventory
              </button>
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/blacknewtruck.svg"
            alt="truck"
            className="w-full h-full flex-1"
          />
        </div>
      </div>
    </>
  );
}
