import React from 'react';
import Map from '../../assets/Map';
import { motion } from 'framer-motion';
import { useHover } from '../../Hooks/Hover';
export const MapConatiner = () => {
  const [AfhoverRef, AfisHovered] = useHover();
  const [CahoverRef, CaisHovered] = useHover();
  return (
    <div
      id="Location"
      className="bg-Lightblue flex flex-col-reverse  lg:flex-row p-8"
    >
      <div className=" svg-container">
        <Map Af={AfisHovered} Ca={CaisHovered}></Map>
      </div>

      <div className=" md:6/12 flex-col flex content-center  flex-1 ml-8">
        <div className=" flex-col flex content-center justify-center lg:w-4/3 flex-1 self-start items-start m-4 2xl:ml-12 xl:ml-8 mt-2 ">
          <div>
            <h3 className="xl:text-4xl lg:self-start text-white font-bold md:text-2xl text-3xl lg:w-max text-center">
              National Footprint:
            </h3>
            <div className="mt-2 text-white font-desc text-descnew text-center">
              Visit our nearest yard. For assistance in the US,{' '}
              <a href="#" className="hover:text-yellow-shadowhover transition ">
                click here
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2 lg:ml-0 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8"
            ></motion.img>
            <div>
              <h4
                className="mt-4 text-sm text-white font-bold md:text-subheading cursor-pointer"
                ref={CahoverRef}
              >
                Abbotsford
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
                1225 Riverside Rd, BC V2S 7P1
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8"
            ></motion.img>
            <div>
              <h4
                className="mt-4 text-sm text-white font-bold md:text-subheading cursor-pointer"
                ref={AfhoverRef}
              >
                Calgary
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
                9115 52 St.SE,AB T2C 2R4
              </div>
            </div>
          </div>
          <div className="my-6">
            <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl  w-max">
              Upcoming Locations:
            </h3>
          </div>
          <div className="flex flex-row items-center content-start mt-2">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div>
              <div className=" text-white font-desc text-descnew">Toronto</div>
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div>
              <div className=" text-white font-desc text-descnew">Surrey</div>
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div>
              <div className=" text-white font-desc text-descnew">Edmonton</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="mt-4 text-white font-desc text-descnew">
                Toronto
              </div>
              <div className="mt-4 text-white font-desc text-descnew">
                Surrey
              </div>
              <div className="mt-4 text-white font-desc text-descnew"> 
                Edmonton
              </div> */
}
