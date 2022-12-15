import React from "react";
import Banner from "../../components/banner/Banner";
import MeetCasts from "../../components/meetCasts/MeetCasts";
import Episodes from "../../components/episodes/Episodes";
import Locations from "../../components/locations/Locations";
import { NavLink, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <div
        className="w-full py-[2vw] px-[4vw] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('images/Home/BackgroundElements/Background.png')",
        }}
      >
        {/* logo */}
        <NavLink to={"/"} className={"z-[10]"}>
          <picture className="w-full">
            <img
              className="block m-auto w-[14%]"
              src="images/logo/Logo.png"
              loading="lazy"
            />
          </picture>
        </NavLink>
        {/* logo */}

        <Banner />
        <MeetCasts castData={data} />
      </div>
      <div className="w-full py-[2vw] px-[4vw] bg-cover bg-no-repeat">
        <Episodes />
        <Locations />
      </div>
    </div>
  );
};

export default Home;
