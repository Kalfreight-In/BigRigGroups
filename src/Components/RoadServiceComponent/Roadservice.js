import React, { useState } from 'react';

export default function Roadservice() {
  const [CTA, setCTA] = useState('Call for Service');

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row pt-12 ">
        <div className="bg-Darkblue flex lg:flex-row flex-col ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 lg:mx-6 flex-1 mx-12"
          >
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl   2xl:text-5xl font-heading lg:text-2xl  lg:text-left px-0 mb-4 md:px-8">
              24X7 Roadside Assistance
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white font-desc 2xl:text-xl text-descnew md:text-base px-0   text-justify md:px-8"
            >
              We understand the value of your time. Hence to minimize delays and
              improve downtime, we offer 24X7 roadside assistance for tires,
              even in remote areas. A vast vendor network spread across Western
              Canada and an impressive team of tire specialists enable us to
              respond efficiently and keep you always on the go.
            </p>
            <div className="flex md:justify-start justify-center items-center md:px-8">
              <button
                onClick={() => {
                  setCTA('800-977-0010');
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg   2xl:w-80 lg:w-56 w-full md:w-52 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-2 flex justify-center items-center"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div
            className="flex-1 bg-cover"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/blacknewtruck.png)`,
            }}
          >
            <img
              src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/blacknewtruck.png"
              alt="truck"
              className="w-full block md:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
