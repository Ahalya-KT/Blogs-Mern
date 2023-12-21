import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landing/Landingpage";

function App() {
  return (
    <div className="bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route element={<Landingpage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
