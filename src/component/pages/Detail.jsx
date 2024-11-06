import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../hooks/UseMovie";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FadeLoader } from "react-spinners";
import movie from "../icons/film.png";
import { SaveContext } from "../context/SaveContext";

function Detail({ title }) {
  const { id } = useParams();
  const [data] = useMovie(`/${title}/${id}`);
  const [recommend] = useMovie(`/${title}/${id}/recommendations`);
  const navigate = useNavigate();
  const { save, setSave } = useContext(SaveContext);

  const handleAdd = (movieID) => {
    const isSave = save.includes(movieID);
    if (isSave) {
      setSave(save.filter((id) => id !== movieID));
    } else {
      setSave([...save, movieID]);
    }
  };

  return (
    <div>
      {data ? (
        <>
          <div className="  bg-Bistre  p-6    text-silk   flex justify-between items-center fixed w-full z-10 top-0">
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
              onClick={() => navigate(-1)}
            ></button>
          </div>
          {title === "movie" || title === "tv" ? (
            data && (
              <div>
                <div className=" relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${
                      data.backdrop_path || data.profile_path
                    }`}
                    alt=""
                    className={
                      " w-full h-screen z-0  bg-cover bg-center pt-20  "
                    }
                  />
                  <div className=" p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/80  to-Bistre/80 ">
                    <div className="flex flex-col md:flex-row   mx-2 my-2 md:my-10 md:mx-10  md:items-center gap-10 md:gap-0 ">
                      <div className="text-silk flex flex-col  md:gap-3 gap-5 md:w-1/2  ">
                        <h1 className="md:text-4xl text-2xl font-semibold">
                          {data.title || data.name}
                        </h1>
                        <div className="flex items-center gap-10">
                          <div className="flex  items-center gap-2 md:text-lg text-base ms-2 text-squirred ">
                            <p className="">
                              {new Date(
                                data.release_date || data.first_air_date
                              ).getFullYear()}
                            </p>
                            |
                            <p>
                              {data.vote_average !== undefined &&
                                data.vote_average.toFixed(1)}
                            </p>
                            |
                            <p>
                              {data.runtime || data.last_episode_to_air.runtime}
                              '
                            </p>
                          </div>
                          <div className="flex items-center gap-2 md:text-lg text-base ">
                            <button onClick={() => handleAdd(data.id)}>
                              {save.includes(data.id) ? (
                                <div className="bi bi-bookmark-fill text-squirred"></div>
                              ) : (
                                <div className="bi bi-bookmark "></div>
                              )}
                            </button>
                            <span className="text-squirred ">
                              Add to Watch List
                            </span>
                          </div>
                        </div>
                        {data.overview && (
                          <p className=" md:text-lg ms-2 text-base text-squirred">
                            {data.overview.split(" ").slice(0, 30).join(" ") +
                              (data.overview.split(" ").length > 30
                                ? " ..."
                                : "")}
                          </p>
                        )}
                      </div>
                      {recommend && (
                        <div className="md:w-80 md:right-14 md:bottom-10    md:absolute">
                          <h2 className="text-silk text-xl">
                            {recommend.results.length >= 1 ? "Recommend" : ""}
                          </h2>
                          <Swiper
                            loop
                            slidesPerView={2}
                            centeredSlides
                            className="rounded-lg mt-5 "
                          >
                            {recommend.results.map((movie) => (
                              <SwiperSlide>
                                <NavLink
                                  to={
                                    title === "movie"
                                      ? `/Movies/${movie.id}`
                                      : `/TVshow/${movie.id}`
                                  }
                                >
                                  {" "}
                                  <div
                                    className=" bg-silk relative w-32  h-48  rounded-2xl"
                                    key={movie.id}
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${
                                        movie.poster_path || movie.profile_path
                                      }`}
                                      alt=""
                                      className="w-32  h-48 rounded-2xl"
                                    />
                                    <div className="rounded-2xl p-4  flex  flex-col justify-end absolute bottom-0 w-full h-full bg-gradient-to-b from-Bistre/10  to-Bistre/95 ">
                                      <p className="text-silk text-lg ">
                                        {movie.name || movie.title}
                                      </p>

                                      {movie.vote_average === undefined ? (
                                        ""
                                      ) : (
                                        <div>
                                          <p className="text-silk flex gap-1 items-center">
                                            <p className="bi bi-star-fill text-yellow text-xs"></p>
                                            <p className="text-base">
                                              {movie.vote_average !==
                                                undefined &&
                                                movie.vote_average.toFixed(1)}
                                            </p>
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </NavLink>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : data ? (
            data && (
              <div className="flex justify-around items-start md:my-10 md:pt-24 pt-20 md:flex-row flex-col ">
                <img
                  src={`https://image.tmdb.org/t/p/w342${data.profile_path}`}
                  alt=""
                  className={" w-42  rounded-xl "}
                  style={{ height: "600px" }}
                />
                <div className="text-start md:w-1/2 text-silk flex flex-col gap-16 m-4 md:m-0 ">
                  <h1 className="text-4xl mt-5 md:mt-0">{data.name}</h1>
                  <div>
                    <h3 className="text-2xl mb-5">Personal Info</h3>
                    <div className="flex flex-col gap-5 ms-3">
                      <div className="">
                        <h6 className="text-xl">Known for</h6>
                        <p className="text-lg text-squirred ">
                          {data.known_for_department}
                        </p>
                      </div>
                      <div>
                        <h6 className="text-xl">Birthday</h6>
                        <p className="text-lg text-squirred">{data.birthday}</p>
                      </div>
                      <div>
                        <h6 className="text-xl">Place of Birth</h6>
                        <p className="text-lg text-squirred">
                          {data.place_of_birth}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-5">Biography</h3>
                    <p className="ms-3 text-squirred">{data.biography}</p>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="loader text-sm">
              <FadeLoader color="#9D8A7C" width={3} height={10} />
            </div>
          )}
        </>
      ) : (
        <div className="loader text-sm ">
          <FadeLoader color="#9D8A7C" width={3} height={10} />
        </div>
      )}
    </div>
  );
}

export default Detail;
