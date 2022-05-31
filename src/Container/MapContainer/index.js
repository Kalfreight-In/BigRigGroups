import React from 'react';
import Map from '../../assets/Map';
import { motion } from 'framer-motion';
import { useHover } from '../../Hooks/Hover';
export const MapConatiner = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className="bg-Lightblue flex flex-col justify-between lg:flex-row">
      <div className="flex-1">
        <Map
          ref={hoverRef}
          fill={isHovered ? '#333' : '#fff'}
          size={isHovered ? 40 : 30}
        ></Map>
      </div>

      <div className=" md:6/12 flex-col flex content-center  flex-1">
        <div className=" flex-col flex content-center justify-center lg:w-4/3 flex-1 self-start items-start m-4 lg:ml-48 mt-2 ">
          <div>
            <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl ">
              National Footprint:
            </h3>
            <div className="mt-2 text-white font-desc text-descnew">
              Visit our nearest yard...
              <br></br>
              As a Vanguard authorized dealer, we offer a variety of dry vans
              and refrigerated trailers and flatsbed and chessie.
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="70"
              className="pr-8"
            ></motion.img>
            <div>
              <h4 className="mt-6 text-1xl text-white font-bold md:text-subheading ">
                Abbotsford
              </h4>
              <div className="mt-6 text-white font-desc text-descnew">
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
              width="70"
              className="pr-8"
            ></motion.img>
            <div>
              <h4 className="mt-6 text-1xl text-white font-bold md:text-subheading ">
                Calagry
              </h4>
              <div className="mt-6 text-white font-desc text-descnew">
                9115 52 St.SE,AB T2C 2R4
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl ">
              Upcoming Locations
            </h3>
          </div>
          <div className="flex flex-row items-center content-start mt-2 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="70"
              className="pr-8 pt-4"
            ></motion.img>
            <div>
              <div className="mt-2 text-white font-desc text-descnew">
                Toronto
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
              width="70"
              className="pr-8 pt-4"
            ></motion.img>
            <div>
              <div className="mt-2 text-white font-desc text-descnew">
                Surrey
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
              width="70"
              className="pr-8 pt-4"
            ></motion.img>
            <div>
              <div className="mt-2 text-white font-desc text-descnew">
                Edmonton
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="mt-6 text-white font-desc text-descnew">
                Toronto
              </div>
              <div className="mt-6 text-white font-desc text-descnew">
                Surrey
              </div>
              <div className="mt-6 text-white font-desc text-descnew"> 
                Edmonton
              </div> */
}
