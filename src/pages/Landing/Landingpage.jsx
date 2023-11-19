import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Landingpage() {
  return (
    <div>
      <Navbar />
      {/* homepage */}
      <div className="flex justify-between px-32  py-7 items-center bg-slate-950">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-6xl text-white">Create your</p>
          <p className="font-bold text-6xl text-white">Contents</p>

          <p className="text-white w-96">
            There is no passion to be found playing small in setting for a life
            that is less than the onw you are capable of living
          </p>
          <div>
            <button className="  bg-blue-600 w-28 h-10 rounded-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Get Started
            </button>
          </div>
        </div>

        <div>
          <img src="https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_640.png" />
        </div>
      </div>

      {/* footer */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
