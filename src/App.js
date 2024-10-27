import { Route, Routes } from "react-router-dom";

import Home from "./component/pages/Home";
import TVshow from "./component/pages/TVshow"
import Movies from "./component/pages/Movies"


function App() {
  return (
    <>
     <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Movies/>} path="/Movies"/>
      <Route element={<TVshow/>} path="/TVshow"/>
     </Routes>
    </>
  );
}

export default App;
