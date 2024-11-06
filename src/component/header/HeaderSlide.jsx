import React, { Component, useState } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMovie } from "../hooks/UseMovie";
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
            <SwiperSlide key={movie.id}>
              <div
                className=" bg-silk aspect-[3] relative rounded-2xl"
                
              >
                <img
                  src={movie.img}
                  alt=""
                  className="w-full  h-96 rounded-2xl"
                />
                <div className="rounded-2xl p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/10  to-Bistre/95 ">
                  <p className="text-silk md:text-base  p-6 pb-2">{movie.name}</p>
                  <p className="text-silk md:text-2xl text-xl p-10 pt-0 ">{movie.text}</p>
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
