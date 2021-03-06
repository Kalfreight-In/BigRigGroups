import { React, useEffect, useState, useRef } from 'react';
import useMediaQuery from '../../../Hooks/CustomMediaQuery';
import { useHover } from '../../../Hooks/Hover';

// import { TabComponent } from '../../TabComponent';

// const colors = [
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
// ];

const delay = 1500;
export function Slideshow({ data, smallSlider = false }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [slides, setStateSlides] = useState(data);
  const [index, setIndex] = useState(0);
  const [ended, setended] = useState(false);
  const timeoutRef = useRef(null);
  const [hoverRef, isHovered] = useHover();
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  console.log(`small slider ${smallSlider}`);
  useEffect(() => {
    resetTimeout();
    // if (index === slides.length) {

    // }
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === slides.length - 4 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }
  }, [index, isHovered, slides, smallSlider]);
  useEffect(() => {
    setStateSlides(data);
  }, [window.location.pathname]);
  // useEffect(() => {
  //   const slidesWithClones = [...slides];
  //   slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
  //   slidesWithClones.push(slidesWithClones[1]);
  //   setStateSlides(slidesWithClones);
  // }, []);

  return (
    <>
      <div
        className={`  md:font-semibold font-bold text-Heading flex justify-center items-center ${
          smallSlider ? 'pb-4' : 'pb-16 mt-16 '
        }  `}
      >
        {smallSlider ? null : (
          <h1 className="text-4xl md:text-1xl">Brands We Offer</h1>
        )}
      </div>
      {/* <TabComponent></TabComponent> */}
      <div
        className=" slideshow    snap-x flex justify-center items-center overflow-auto"
        ref={hoverRef}
      >
        <div
          className="slideshowSlider  transition ease-linear delay-100 mb-16 "
          style={{
            transform: `translate3d(${
              -index * (!isDesktop ? 100 : 25)
            }%, 0, 0)`,
          }}
        >
          {slides.map((brand, index) => (
            <div
              className={`${
                smallSlider
                  ? 'slide_small  w-1/4  md:grayscale-1 hover:scale-75 `'
                  : ' w-1/4  md:grayscale hover:scale-110 '
              }       hover:grayscale-0 slide  transition-all items-center content-center justify-center inline-block 2xl:h-40 xl:h-32 md:h-24  `}
              key={index}
              // style={{ backgroundImage: `url(${brand.imageurl})` }}
            >
              <img
                src={brand.imageurl}
                style={{
                  border: '1px solid #ddd',
                }}
                className={`${
                  smallSlider ? 'p-0' : 'p-0'
                }    self-center  justify-self-center justify-items-center md:mx-12 inline-block 2xl:h-40 xl:h-32 md:h-24  `}
              ></img>
            </div>
          ))}
        </div>

        {/* <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx / 4}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx / 4);
              }}
            ></div>
          ))}
        </div> */}
      </div>
    </>
  );
}

// flex space-x-5 overflow-x-auto snap-x
// w-80 flex-shrink-0 snap-center h-48 bg-gray-800
