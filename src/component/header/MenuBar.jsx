import React, { Component, useState } from "react";
import movie from "../icons/film.png";
import { NavLink } from "react-router-dom";

function MenuBar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="  bg-Bistre  p-6    text-silk   flex justify-between items-center">
        <div className="flex items-end gap-1">
          <p className="text-3xl">FilmFy </p>
          <img src={movie} alt="" className="w-5 h-5  bottom-0" id="logoimg" />
        </div>
        <button
          className="bi bi-list text-4xl outline-none"
          onClick={handleOpenMenu}
        ></button>
      </div>
      <div className=" relative ">
        <div
          className={`${
            isOpen ? " block   " : " hidden  "
          } absolute z-20  right-0 w-64  `}
        >
          <ul className="bg-Bistre opacity-90  text-silk flex flex-col gap-8 border-t-2 border-t-judge p-9  text-xl  h-screen  ">
            <NavLink to={"/Movies"}>
              <p >Movies</p>
            </NavLink>
            <NavLink to={"TVshow"}>
              <p >TV Shows</p>
            </NavLink>
            <NavLink to={"Person"}>
              <p >People</p>
            </NavLink>
            <NavLink to={"Fav"}>
              <p>Favorites</p>
            </NavLink>
            <li>
              <p >Login</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
