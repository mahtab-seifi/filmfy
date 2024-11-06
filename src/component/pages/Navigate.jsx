import { useNavigate } from "react-router-dom";
import movie from "../icons/film.png";

function NavigateBack() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" sticky top-0 z-10 ">
        <div className="  bg-Bistre  p-6    text-silk   flex justify-between items-center  w-full ">
          <div className="flex items-end gap-1">
            <p className="text-3xl">FilmFy </p>
            <img
              src={movie}
              alt=""
              className="w-5 h-5  bottom-0"
              id="logoimg"
            />
          </div>
          <button
            className="bi bi-chevron-double-right text-squirred text-3xl"
            onClick={() => navigate("/")}
          ></button>
        </div>
      </div>
    </>
  );
}

export default NavigateBack;
