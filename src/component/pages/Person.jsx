import { useEffect, useRef, useState } from "react";
import { FadeLoader } from "react-spinners";
import axios from "axios";

import NavigateBack from "./Navigate";
import PageBox from "./PageBox";

function Person() {
  const [movie, setMovie] = useState(null);
  const [page, setpage] = useState(1);
  const movieListRef = useRef(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=43f04d77eace534088e9f79300e39c31&page=${page}`
      );
      setMovie(result.data.results);
      movieListRef.current?.scrollIntoView({ behavior: "smooth" });
    })();
  }, [page]);
  const handlenext = () => {
    setpage(page + 1);
  };
  const handleback = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  return (
    <>
      {movie ? (
        <>
          <NavigateBack />
          <div ref={movieListRef} className=" flex flex-col ">
            <div className="flex justify-center ">
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-14 gap-5 my-20 mx-5 md:mx-10">
                {movie && movie.map((movies) => <PageBox movies={movies} detail={"Person"}/>)}
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <button
                onClick={handleback}
                disabled={page === 1}
                className="bi bi-chevron-double-left  md:m-5 mx-2 my-5  border-Bistre border-2 text-squirred text-xl bg-Bistre py-1 h-10 px-3 rounded-full"
              ></button>
              <p className="text-silk text-base">{page}</p>
              <button
                onClick={handlenext}
                className="bi bi-chevron-double-right  md:m-5 mx-2 my-5  border-Bistre border-2 text-squirred text-xl bg-Bistre h-10 py-1 px-3 rounded-full"
              ></button>
            </div>
          </div>
        </>
      ) : (
        <div className="loader text-sm">
          <FadeLoader color="#9D8A7C" width={3} height={10} />
        </div>
      )}
    </>
  );
}

export default Person;
