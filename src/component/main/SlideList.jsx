import { useState } from "react";
import Slide from "./Slide";

function SlideList() {
  const [active, setActive] = useState("day");
  const [activePopular, setActivePopular] = useState("movie");
  const [trendOpen, setTrendOpen] = useState(false);
  const [popularOpen, setPopularOpen] = useState(false);
  const [TrendText, setTrendText] = useState("Today");
  const [popularText, setPopularText] = useState("Movie");
  const [person]=useState("person")
  const handleTrendOpen = () => {
    setTrendOpen(!trendOpen);
  };
  const handlePopularOpen = () => {
    setPopularOpen(!popularOpen);
  };
  const handleActive = (tab, text) => {
    setActive(tab);
    setTrendText(text);
    setTrendOpen(false);
  };
  const handleActivePopular = (tab,text) => {
    setActivePopular(tab);
    setPopularText(text)
    setPopularOpen(false)
  };
  function activeTab(tab) {
    return tab === active
      ? "text-silk   border-2 border-Bistre rounded-full px-4 md:px-5 bg-Bistre transition-all duration-300 ease-in-out outline-none"
      : "  md:text-base text-sm px-3 md:px-4 outline-none ";
  }
  function activeTabPopular(tab) {
    return tab === activePopular
      ? "text-silk   border-2 border-Bistre rounded-full px-4 md:px-5 bg-Bistre transition-all duration-300 ease-in-out outline-none"
      : "  md:text-base  text-sm md:px-3 md:px-4 outline-none  ";
  }

  return (
    <>
      <div>
        <div className="flex md:gap-20 gap-10 text-squirred items-center m-10 justify-between">
          <p className="md:text-3xl text-xl ">Trending</p>
          <ul
            className="md:flex  md:gap-10 gap-4  items-center [&>*]:cursor-pointer rounded-full hidden "
            id="trending"
          >
            <li
              className={`nd:text-xl text-lg ${activeTab("day")}`}
              onClick={() => handleActive("day")}
            >
              Today
            </li>
            <li
              className={`md:text-xl text-lg ${activeTab("week")}`}
              onClick={() => handleActive("week")}
            >
              Week
            </li>
          </ul>
          <div className="md:hidden   ">
            <button onClick={handleTrendOpen} className="text-silk   bg-Bistre rounded-full px-4 py-1 text-base flex items-center gap-2">
              <p >{TrendText}</p>
              <p className="bi bi-caret-down-fill text-xs"></p>
            </button>
            <div className="relative ">
              <ul
                className={`px-2  absolute z-10  border-2 border-Bistre rounded-2xl bg-Bistre  py-2 gap-3 flex flex-col ${
                  trendOpen ? "block" : "hidden"
                }  `}
              >
                <li
                  className={` text-lg ${activeTab("day")}`}
                  onClick={() => handleActive("day", "Today")}
                >
                  Today
                </li>
                <li
                  className={` text-lg ${activeTab("week")}`}
                  onClick={() => handleActive("week", "Week")}
                >
                  Week
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Slide  actives={`trending/all/${active}`} />
      </div>
      <div className="mt-24">
        <div className="flex md:gap-20 gap-10 text-squirred items-center m-10 justify-between ">
          <p className="md:text-3xl text-xl ">Actors</p>
        
        </div>
        <Slide  actives={`${person}/popular`} activePopulars={person} />
      </div>
      <div className="mt-24">
        <div className="flex md:gap-20 gap-10 text-squirred items-center m-10 justify-between ">
          <p className="md:text-3xl text-xl ">What's Popular</p>
          <ul
            className="md:flex  md:gap-10 gap-4  items-center [&>*]:cursor-pointer rounded-full hidden "
            id="trending"
          >
            <li
              className={`nd:text-xl text-lg ${activeTabPopular("movie")}`}
              onClick={() => handleActivePopular("movie")}
            >
              Movies
            </li>
            <li
              className={`md:text-xl text-lg ${activeTabPopular("tv")}`}
              onClick={() => handleActivePopular("tv")}
            >
              TV Series
            </li>
          </ul>
          <div className="md:hidden   ">
            <button onClick={handlePopularOpen} className="w-fit text-silk bg-Bistre rounded-full px-4 py-1 text-base flex items-center gap-2">
              <p className="" >{popularText}</p>
              <p className="bi bi-caret-down-fill text-xs"></p>
            </button>
            <div className="relative">
              <ul
                className={` absolute z-10  border-2 border-Bistre rounded-2xl bg-Bistre px-2 py-2 gap-3 flex flex-col ${
                  popularOpen ? "block" : "hidden"
                }  `}
              >
                <li
                  className={` text-lg ${activeTabPopular("movie")}`}
                  onClick={() => handleActivePopular("movie", "Movies")}
                >
                  Movies
                </li>
                <li
                  className={` text-lg ${activeTabPopular("tv")}`}
                  onClick={() => handleActivePopular("tv", "Tv Shows")}
                >
                  TV Series
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Slide  actives={`${activePopular}/popular`} activePopulars={activePopular}/>
      </div>
    </>
  );
}

export default SlideList;
