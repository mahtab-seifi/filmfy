import NavigateBack from "./Navigate";
import { useContext } from "react";
import { SaveContext } from "../context/SaveContext";
import { useMovie } from "../hooks/UseMovie";
import { NavLink } from "react-router-dom";

function BookMark() {
  const { save, setSave } = useContext(SaveContext);
  const [tvs] = useMovie(`discover/tv`);
  const [movies] = useMovie(`discover/movie`);

  const filterListtv =
    tvs && tvs.results.filter((movie) => save.includes(movie.id));

  const filterListmovie =
    movies && movies.results.filter((movie) => save.includes(movie.id));

  return (
    <>
      <div>
        <NavigateBack />
        <div>
          <h5 className="text-silk text-2xl m-4">my Faviorites</h5>
        </div>
        {filterListmovie &&
          filterListmovie.map((movie) => (
            <NavLink to={`/Movies/${movie.id}`}>
              <div className="flex m-6 " key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path || movie.profile_path
                  }`}
                  alt=""
                  className="w-40 h-60 rounded-s-xl "
                />
                <div className="border-s-0 border-2 border-squirred border-opacity-30 w-full rounded-e-xl h-60">
                  <div className="flex flex-col gap-16  m-4">
                    <div>
                      <h2 className="text-2xl text-silk">
                        {movie.title || movie.name}
                      </h2>
                      <h6 className="text-sm text-squirred">
                        {movie.release_date}
                      </h6>
                    </div>

                    {movie.overview && (
                      <div>
                        <p className="text-squirred text-lg hidden md:block">
                          {movie.overview.split("").slice(0, 200).join("") +
                            (movie.overview.split("").length > 200
                              ? "..."
                              : "")}
                        </p>
                        <p className="text-squirred text-lg  md:hidden">
                          {movie.overview.split("").slice(0, 50).join("") +
                            (movie.overview.split("").length > 50 ? "..." : "")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        {filterListtv &&
          filterListtv.map((movie) => (
            <NavLink to={`/TVshow/${movie.id}`}>
              {" "}
              <div className="flex m-6 " key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path || movie.profile_path
                  }`}
                  alt=""
                  className="w-40 h-60 rounded-s-xl "
                />
                <div className="border-s-0 border-2 border-squirred border-opacity-30 w-full rounded-e-xl h-60">
                  <div className="flex flex-col gap-16  m-4">
                    <div>
                      <h2 className="text-2xl text-silk ">
                        {movie.title || movie.name}
                      </h2>
                      <h6 className="text-sm text-squirred">
                        {movie.first_air_date}
                      </h6>
                    </div>

                    {movie.overview && (
                      <div>
                        <p className="text-squirred text-lg hidden md:block">
                          {movie.overview.split("").slice(0, 200).join("") +
                            (movie.overview.split("").length > 200
                              ? "..."
                              : "")}
                        </p>
                        <p className="text-squirred text-lg  md:hidden">
                          {movie.overview.split("").slice(0, 50).join("") +
                            (movie.overview.split("").length > 50 ? "..." : "")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </>
  );
}

export default BookMark;
