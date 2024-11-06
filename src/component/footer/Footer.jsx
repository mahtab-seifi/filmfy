import movie from "../icons/film.png";

function Footer() {
  return (
    <>
      <footer className="bg-Bistre p-12 mt-20 flex justify-evenly md:items-center flex-col md:flex-row">
        <div className="flex items-end gap-1 mb-12 md:mb-0">
          <p className="text-3xl text-silk">FilmFy </p>
          <img src={movie} alt="" className="w-5 h-5  bottom-0" id="logoimg" />
        </div>

        <div className="mb-12 md:mb-0">
          <p className="text-xl  text-silk mb-8 ">contact us</p>
          <ul className="text-squirred flex flex-col gap-3">
            <li className="flex gap-2">
              <p className="bi bi-telephone "></p>
              <p>09333358191</p>
            </li>
            <li className="flex gap-2">
              <p className="bi bi-envelope"></p>
              <p>sbmahtab81@gmail.com</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl text-silk mb-8 ">accessibility</p>
          <ul className="text-squirred flex flex-col gap-2">
            <li className="flex gap-2">Trending</li>
            <li className="flex gap-2">Popular</li>
            <li className="flex gap-2">Actors</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
