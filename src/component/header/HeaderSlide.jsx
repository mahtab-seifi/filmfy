import React, { Component, useState } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMovie } from "../hooks/useMovie";
import forrest from "../icons/forrest.jpg";
import godfather from "../icons/godfather.jpg";
import braveHeart from "../icons/Braveheart,.jpg";
import help from "../icons/thehelp.jpg";

function HeaderSlide() {
  const [movie, setMovie] = useState([
    {
      img: forrest,
      name: "Forrest Gump :",
      text: " My mama always said life was like a box of chocolates.",
    },
    {
      img: godfather,
      name: "The Godfather :",
      text: "   Keep your friends close, but your enemies closer.",
    },
    {
      img: braveHeart,
      name: "Brave Heart :",
      text: "  They may take our lives, but they'll never take our freedom!",
    },
    {
      img: help,
      name: "The Help :",
      text: "   You is kind. You is smart. You is important.",
    },
  ]);

  return (
    <>
      <div className="my-10 mx-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop
          centeredSlides
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          className="  rounded-xl"
        >
          {movie.map((movie) => (
            <SwiperSlide>
              <div
                className=" bg-silk aspect-[3] relative rounded-2xl"
                key={movie.id}
              >
                <img
                  src={movie.img}
                  alt=""
                  className="w-full  h-96 rounded-2xl"
                />
                <div className="rounded-2xl p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/10  to-Bistre/95 ">
                  <p className="text-silk text-md p-6 pb-2">{movie.name}</p>
                  <p className="text-silk text-2xl p-10 pt-0 ">{movie.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HeaderSlide;
