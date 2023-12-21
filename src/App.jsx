import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landing/Landingpage";
import AllBlogspage from "./pages/AllBlogs/AllBlogspage";

function App() {
  return (
    <div className="bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route element={<Landingpage />} path="/" />
          <Route element={  <AllBlogspage/>} path="/the-blog" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
