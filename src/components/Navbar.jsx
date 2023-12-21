import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-5 md:px-32 bg-slate-950 text-white">
      <div>
        <p className="font-bold text-xl">BLOGS</p>
      </div>
      <nav className="flex gap-9">
        <Link to="/">Home</Link>
        <p>Works</p>
        <p>Providers</p>
        <p>Contact us</p>
      </nav>
      <div className="flex gap-5">
        <button className="bg-blue-500 w-20 h-8 rounded-md ">Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
