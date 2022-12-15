import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import MeetCasts from "../meetCasts/MeetCasts";

const Banner = () => {
  return (
    <section className="">
      <div className="m-auto w-[57%] mt-20 relative">
        <picture className="w-[18vw] absolute left-[-9.7vw] top-[-7.1vw]">
          <img
            className=""
            src="images/Home/HeroElements/bubble.png"
            loading="lazy"
          />
        </picture>
        <picture className="w-[21vw] absolute right-[-14vw] bottom-[-6.5vw]">
          <img
            className=""
            src="images/Home/HeroElements/gun.png"
            loading="lazy"
          />
        </picture>
        <div className="bg-greenL w-full h-[1vw] blur-[50px] absolute top-16 right-5"></div>
        <h1 className="text-[6vw] font-extrabold">
          <span
            className="italic"
            style={{
              color: "",
            }}
          >
            THE
          </span>{" "}
          <img
            className="inline w-[10vw] mb-6 mr-3"
            src="images/Home/HeroElements/portal.png"
          />
          <span
            className="text-primary bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-transparent bg-clip-text"
            style={{
              color: "",
            }}
          >
            RICK &
          </span>{" "}
          <span
            className="text-primary bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-transparent bg-clip-text"
            style={{
              color: "",
            }}
          >
            MORTY
          </span>{" "}
          <span
            className="italic"
            style={{
              color: "",
            }}
          >
            WIKI
          </span>{" "}
        </h1>
      </div>
      <div className="flex gap-x-10 m-auto w-[48%] mt-8 relative">
        <button className="w-1/3 py-4 px-6 rounded-full bg-gradient-to-r from-[#70b500] to-[#14D9E5] hover:from-[#14D9E5] hover:to-[#70b500] linear duration-300 text-lg font-semibold">
          <BsPlayCircle className="inline" /> Watch Now
        </button>
        <p className="w-2/3 text-sm">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
      <div className="absolute right-[-45px] top-[-45px] w-[200px] h-[200px] bg-ellipse rounded-full blur-[90px]"></div>
    </section>
  );
};

export default Banner;
