import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { Businessdata } from "../../data";
import { useSpring, animated } from "react-spring";
import { useHover } from "../../Hooks/Hover";
import { NavLink as LinkR } from "react-router-dom";
import useMediaQuery from "../../Hooks/CustomMediaQuery";

const mydata = Businessdata[0];

export const NavLinks = styled(LinkR)`
  // Your styled-component CSS here, if any
`;

export default function Business() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [hoverRef, isHovered] = useHover();
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <div className="bg-businessbackground">
      <div className="md:p-12 p-0 drop-shadow-2xl">
        <div className="flex justify-center items-center font-semibold pt-2">
          <h1 className="md:text-5xl text-3xl font-bold link link-underline link-underline-black text-Heading mb-6 pb-2">
            {mydata.heading}
          </h1>
        </div>

        <div className={`flex w-full md:flex-row flex-col`}>
          <div className="flex w-full">
            <div className={`gallery-wrap flex md:flex-row flex-col w-full`}>
              {mydata.thebox.map((element, index) =>
                isTablet ? (
                  <NavLinks
                    key={index}
                    to={element.url}
                    className={`h-businessImage ${
                      !isMobile ? "Mitem" : ""
                    } md:my-0 my-4 bg-contain bg-no-repeat bg-center`}
                    style={{
                      backgroundImage: `url(${element.Mimageurl})`,
                    }}
                  >
                    {/* Content if needed */}
                  </NavLinks>
                ) : (
                  <NavLinks
                    key={index}
                    to={element.url}
                    className="item"
                    style={{
                      backgroundImage: `url(${element.imageurl})`,
                    }}
                  >
                    {/* Content if needed */}
                  </NavLinks>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
