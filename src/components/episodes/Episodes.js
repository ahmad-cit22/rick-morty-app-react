import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [data, setData] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
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

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      // setData(response.data);
      setData(response.data.results);
    };
    fetchEpisodes();
    console.log(data);
  }, []);

  console.log(data);
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      // renderDotsOutside
      keyBoardControl={true}
      infinite={false}
    >
      {data !== null &&
        data.map((item) => (
          <div className="mr-4 bg-white/[3%] relative border-[1px] border-greenL/50 hover:border-greenL linear duration-300 rounded-md p-3 pb-6 after:h-[5.2vw] after:w-[4vw] after:absolute after:bg-primary after:rotate-[67deg] after:border-l-[1px] after:border-greenL/50 after:border-greenL/50 after:hover:border-greenL after:bottom-[-3.5vw] after:right-[-0.5vw] after:linear after:duration-300">
            <Link to={"/castDetails"} className={"z-[10]"}>
              <p className="mt-3 text-xs font-pop truncate">{item.episode}</p>
              <p className="mt-2 font-pop truncate">{item.name}</p>
            </Link>
          </div>
        ))}
    </Carousel>
  );
};

export default Episodes;
