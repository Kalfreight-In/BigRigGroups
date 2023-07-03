import React from 'react';
import Map from '../../assets/Map';
import { motion } from 'framer-motion';
import { useHover } from '../../Hooks/Hover';
import { Link } from 'react-router-dom';
export const MapConatiner = () => {
  const [AfhoverRef, AfisHovered] = useHover();
  const [CahoverRef, CaisHovered] = useHover();
  const [BoltonRef, BoltonisHovered] = useHover();
 // const [SurreyRef, SurreyisHovered] = useHover();
  const [EdmentonRef, EdmentonisHovered] = useHover();
  const [BramptonRef, BramptonisHovered] = useHover();
  return (
    <div
      id="Location"
      className="bg-Lightblue flex flex-col-reverse  md:flex-row p-8 "
    >
      <div className=" svg-container">
        <Map
          Af={AfisHovered}
          Ca={CaisHovered}
          Bolton={BoltonisHovered}
         // Surrey={SurreyisHovered}
          edmenton={EdmentonisHovered}
          Brampton={BramptonisHovered}
        ></Map>
      </div>

      <div className=" md:6/12 flex-col flex content-center  flex-1 md:ml-8 ml-0 ">
        <div className=" flex-col flex content-center justify-center md:w-4/3 flex-1 self-start items-start m-4 2xl:ml-12 xl:ml-8 mt-2 ">
          <div>
            <h3 className="xl:text-4xl md:self-start text-white font-bold md:text-3xl text-3xl md:w-max text-center">
              National Footprint:
            </h3>
            <div className="mt-2 text-white font-desc text-descnew text-center">
              <span>Visit our nearest yard.</span>
              <br></br>
              <span>For assistance in the USA. </span>

              <Link
                to="/mappage"
                className="hover:text-yellow-shadowhover transition  text-yellow-shadowhover"
              >
                click here
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center content-start mt-2 md:ml-0 ">
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
                className="mt-4 md:text-xl  text-lg text-white md:font-bold font-extrabold cursor-pointer"
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
                className="mt-4 md:text-xl text-lg  text-white md:font-bold font-extrabold  cursor-pointer"
                ref={AfhoverRef}
              >
                Calgary
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
                9115 52 St.SE, AB T2C 2R4
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
              className="pr-8 "
            ></motion.img>
            <div>
              <h4
                className="mt-4 md:text-xl text-lg  text-white md:font-bold font-extrabold  cursor-pointer"
                ref={EdmentonRef}
              >
                Edmonton
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
              18410 118a Ave NW, Edmonton, Alberta, Canada, T5S 2M3
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
              className="pr-8 "
            ></motion.img>
            <div>
              <h4
                className="mt-4 md:text-xl text-lg  text-white md:font-bold font-extrabold  cursor-pointer"
                ref={BramptonRef}
              >
                Brampton
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
              100 Whybank Dr, Brampton, Ontario, Canada, L7A 0N7
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
              className="pr-8 "
            ></motion.img>
            <div>
              <h4
                className="mt-4 md:text-xl text-lg  text-white md:font-bold font-extrabold  cursor-pointer"
                ref={BoltonRef}
              >
                Bolton
              </h4>
              <div className="mt-4 text-white font-desc text-descnew">
              12125 Coleraine Drive, Bolton, ON
              </div>
            </div>      
          </div>



          {/* <div className="my-6">
            <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl  w-max">
              Upcoming Locations:
            </h3>
          </div> */}
          {/* <div className="flex flex-row items-center content-start mt-2">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div className="cursor-pointer">
              <div
                className=" text-white font-desc text-descnew"
                ref={TorontoRef}
              >
                Toronto
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-row items-center content-start mt-2 ">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div className="cursor-pointer">
              <div
                className=" text-white font-desc text-descnew"
                ref={SurreyRef}
              >
                Surrey
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-row items-center content-start mt-2">
            <motion.img
              whileInView={{ scale: [0.5, 1] }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              alt="profile_circle"
              //  className="overlay_circle"
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/8ae50d3492cecd39993497fceab3e9dc5c73ef79/src/assets/Map/marker.svg"
              width="60"
              className="pr-8 "
            ></motion.img>
            <div className="cursor-pointer">
              <div
                className=" text-white font-desc text-descnew"
                ref={EdmentonRef}
              >
                Edmonton
              </div>
            </div>
          </div> */}

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
