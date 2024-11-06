import MenuBar from "../header/MenuBar";
import HeaderSlide from "../header/HeaderSlide";
import SearchBox from "../header/SearchBox";
import SlideList from "../main/SlideList";
import Footer from "../footer/Footer"

function Home() {
  return (
    <>
      <MenuBar />
      <HeaderSlide />
      <SearchBox />
      <SlideList />
      <Footer/>
    </>
  );
}

export default Home;
