import React from "react";
import Gradientbtn from "../../components/Gradientbtn";

function ProviderCard({ title, description }) {
  return (
    <div className="text-white 1/4 px-7 py-16 bg-slate-900 rounded-md shadow-md">
      <p className="font-bold text-xl py-2 ">{title}</p>
      <p className="w-52 py-3">{description}</p>
      <Gradientbtn title="Read More Details" />
    </div>
  );
}

export default ProviderCard;
