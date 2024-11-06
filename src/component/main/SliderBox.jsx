import { NavLink } from "react-router-dom";

function SliderBox({ movie, activePopular }) {
  let path;
  if (movie.media_type === "movie" || activePopular === "movie") {
    path = `Movies/${movie.id}`;
  } else if (activePopular === "person") {
    path = `Person/${movie.id}`; // Assuming query parameter for person details
  } else {
    path = `TVshow/${movie.id}`;
  }
  return (
    <>
      <div>
        <NavLink to={path}>
          <div className=" bg-silk aspect-[3] relative rounded-2xl">
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path || movie.profile_path
              }`}
              alt=""
              className="w-full  md:h-60 h-auto  rounded-2xl"
            />
            <div className="rounded-2xl p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/10  to-Bistre/95 ">
              <p className="text-silk text-lg ">{movie.name || movie.title}</p>

              {movie.vote_average === undefined ? (
                ""
              ) : (
                <div>
                  <p className="text-silk flex gap-1 items-center">
                    <p className="bi bi-star-fill text-yellow text-xs"></p>
                    <p className="text-base">
                      {movie.vote_average !== undefined &&
                        movie.vote_average.toFixed(1)}
                    </p>
                  </p>
                </div>
              )}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default SliderBox;
