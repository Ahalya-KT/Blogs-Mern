import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

function Testmonial({ img, title, about }) {
  return (
    <div className="text-white px-10 py-20 bg-slate-900 rounded-md shadow-md text-center">
      <div className="px-14">
        <img className="w-12 h-12 rounded-full" src={img} />
      </div>
      <p className="text-slate-400">{title}</p>
      <p className="font-semibold text-xl">{about}</p>

      <div className="flex gap-2 py-2 px-11">
        <FaInstagram size={25} className=" text-indigo-400" />
        <CiLinkedin size={25} className=" text-indigo-400" />
        <CiTwitter size={25} className=" text-indigo-400 " />
      </div>
    </div>
  );
}

export default Testmonial;
