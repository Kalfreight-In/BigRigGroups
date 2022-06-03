import { React, useEffect, useState, useRef } from 'react';
import { useHover } from '../../../Hooks/Hover';

// import { TabComponent } from '../../TabComponent';
import { isMobile, browserName } from 'react-device-detect';
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
  const [index, setIndex] = useState(0);

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
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }
  }, [index, isHovered]);

  return (
    <>
      <div
        className={`text-36px font-semibold text-Heading flex justify-center items-center ${
          smallSlider ? 'pb-4' : 'pb-16 mt-16 '
        }  `}
      >
        {smallSlider ? null : <h1>Brands We Offer</h1>}
      </div>
      {/* <TabComponent></TabComponent> */}
      <div
        className=" slideshow    snap-x flex  overflow-x-auto"
        ref={hoverRef}
      >
        <div
          className="slideshowSlider  transition ease-in delay-100 mb-20"
          style={{
            transform: `translate3d(${
              -index * (isMobile ? 100 : 33.33333333333333333)
            }%, 0, 0)`,
          }}
        >
          {data.map((brand, index) => (
            <div
              className={`${
                smallSlider
                  ? 'slide_small lg:grayscale-1 '
                  : 'slide lg:grayscale'
              }    w-1/3    hover:grayscale-0 hover:scale-125 transition-all flex items-center content-center justify-center `}
              key={index}
              // style={{ backgroundImage: `url(${brand.imageurl})` }}
            >
              <img
                src={brand.imageurl}
                className={`${
                  smallSlider ? 'p-2' : 'p-0'
                }    self-center slide justify-self-center justify-items-center`}
              ></img>
            </div>
          ))}
        </div>

        {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx / 3}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx / 3);
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
