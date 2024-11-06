import { Swiper, SwiperSlide } from "swiper/react";
import { useMovie } from "../hooks/UseMovie";
import { Autoplay } from "swiper/modules";
import SliderBox from "./SliderBox";

import { FadeLoader } from "react-spinners";

function Slide({ actives, activePopulars }) {
  const [data] = useMovie(`${actives}`);
  

  return (
    <>
      <div className="m-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          centeredSlides
          loop={true}
          breakpoints={{ 640: { slidesPerView: 6, spaceBetween: 20 } }}
          className=" rounded-xl"
        >
          {data ? (
            data &&
            data.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <SliderBox movie={movie} activePopular={activePopulars} />
              </SwiperSlide>
            ))
          ) : (
            <div className="loader text-sm">
              <FadeLoader color="#9D8A7C" width={3} height={10} />
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default Slide;
