import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const MeetCasts = ({ castData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const data = castData.results;

  return (
    <section className="mt-20">
      <div className="flex justify-between w-full mb-5">
        <p className="text-2xl">Meet The Cast</p>
        <Link
          to={"/casts"}
          className="border-[1px] border-solid border-greenL/70 hover:border-greenL linear duration-300 rounded-md px-5 py-1.5 mr-2"
        >
          View All
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        // renderDotsOutside
        keyBoardControl={true}
        infinite={false}
      >
        {data.map((item) => (
          <div className="mr-4 bg-white/[3%] relative border-[1px] border-greenL/50 hover:border-greenL linear duration-300 rounded-md p-3 pb-6 after:h-[5.2vw] after:w-[4vw] after:absolute after:bg-primary after:rotate-[67deg] after:border-l-[1px] after:border-greenL/50 after:border-greenL/50 after:hover:border-greenL after:bottom-[-3.5vw] after:right-[-0.5vw] after:linear after:duration-300">
            <Link to={"/castDetails"} className={"z-[10]"}>
              <picture className="w-full">
                <img
                  className="w-[14vw] rounded-md"
                  src={item.image}
                  loading="lazy"
                />
              </picture>
              <p className="mt-4 font-pop truncate">{item.name}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MeetCasts;
