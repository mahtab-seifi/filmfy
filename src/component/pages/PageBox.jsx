import { NavLink } from "react-router-dom";

function PageBox({ movies,detail }) {
  let path;
  if (detail === "Movies") {
    path = `/Movies/${movies.id}`
  } else if (detail === "TVshow") {
    path = `/TVshow/${movies.id}`
  } else {
    path = `/Person/${movies.id}`
  }
  return (
    <>
      <NavLink to={path}>
        <div key={movies.id} className="">
          <div className="md:w-48   md:h-72  bg-silk  relative rounded-2xl ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                movies.poster_path || movies.profile_path
              }`}
              alt=""
              className="md:w-48   md:h-72 h-auto  rounded-2xl"
            />
            <div className="rounded-2xl p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/10  to-Bistre/95 ">
              <p className="text-silk text-lg ">
                {movies.name || movies.title}
              </p>

              {movies.vote_average === undefined ? (
                ""
              ) : (
                <div>
                  <p className="text-silk flex gap-1 items-center">
                    <p className="bi bi-star-fill text-yellow text-xs"></p>
                    <p className="text-base">
                      {movies.vote_average !== undefined &&
                        movies.vote_average.toFixed(1)}
                    </p>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default PageBox;
