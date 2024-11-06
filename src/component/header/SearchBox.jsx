import { useEffect, useState } from "react";
import { Services } from "../config/Services";
import { NavLink } from "react-router-dom";
import movie from "../icons/play-button.png";
import tv from "../icons/tv.png";
import user from "../icons/user.png";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query) {
        const result = await Services.get(`search/multi`, {
          params: { query },
        });
        setSearchResult(result.data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  return (
    <>
      <div className="mx-5 relative">
        <input
          value={query}
          className="bg-Bistre w-full px-4  md:px-6 py-3 rounded-3xl  text-silk outline-none text-lg  md:text-xl placeholder-squirred"
          type="text"
          placeholder="Search for movie , tvshow , ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <i class="bi bi-search text-silk text-xl md:text-2xl absolute md:top-2.5 md:right-6 top-3 right-4"></i>

        <div
          className={
            query
              ? "bg-Bistre h-64 overflow-auto  rounded-3xl mt-1 z-10 absolute w-full opacity-95 transition-all duration-300 "
              : `hidden`
          }
          id="scrollBar"
        >
          {searchResult.length ? (
            searchResult.map((item) => (
              <NavLink
                to={
                  item.media_type === "movie"
                    ? `Movies/${item.id}`
                    : item.media_type === "tv"
                    ? `TVshow/${item.id}`
                    : `Person/${item.id}`
                }
              >
                <div
                  className="border-b-2 border-opacity-10 border-squirred"
                  key={item.id}
                >
                  <div className="m-4 flex items-center text-silk gap-3  ">
                    <img
                      src={
                        item.poster_path || item.profile_path
                          ? `https://image.tmdb.org/t/p/w92/${
                              item.poster_path || item.profile_path
                            }`
                          : item.media_type === "movie"
                          ? movie
                          : item.media_type === "tv"
                          ? tv
                          : user
                      }
                      alt=""
                      className="rounded-full w-12 h-12 "
                    />
                    <span>
                      {item.title || item.name} 
                    </span>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div className="loader m-4 text-silk">Nothing found ...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBox;
