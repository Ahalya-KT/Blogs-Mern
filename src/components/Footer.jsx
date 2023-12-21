import React from "react";

function Footer() {
  return (
    <div className="text-white lg:flex  px-32 justify-center items-center h-60 pt-10">
      <div className="w-1/2  flex flex-col gap-3">
        <p className="font-bold text-4xl">Subscribe to my</p>
        <p className="font-bold text-4xl text-sky-600">Newsletter</p>
        <div className="w-96">
          <p className="text-x1  ">
            Never miss an update Subscribe to our newsletter for exclusive
            content special offers latest trends.
          </p>
        </div>
      </div>

      <div className="w-1/2 ">
        <div className="bg-slate-800   py-2 px-5  rounded-xl w-96 flex justify-between items-center">
          Enter your Email
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500  w-28  rounded-xl h-9">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
