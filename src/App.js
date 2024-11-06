import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import TVshow from "./component/pages/TVshow";
import Movies from "./component/pages/Movies";
import Person from "./component/pages/Person";
import Detail from "./component/pages/Detail";
import BookMark from "./component/pages/BookMark";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Movies />} path="/Movies" />
        <Route element={<TVshow />} path="/TVshow" />
        <Route element={<Person />} path="/Person" />
        <Route element={<BookMark />} path="/Fav" />
        <Route element={<Detail title={"movie"} />} path="/Movies/:id" />
        <Route element={<Detail title={"tv"} />} path="/TVshow/:id" />
        <Route element={<Detail title={"person"} />} path="/Person/:id" />
      </Routes>
    </>
  );
}

export default App;
