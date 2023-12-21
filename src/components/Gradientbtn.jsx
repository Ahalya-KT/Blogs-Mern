import React from "react";

function Gradientbtn({ title }) {
  return (
    <div>
      <button className="bg-blue-600 py-2 px-10 rounded-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        {title}
      </button>
    </div>
  );
}

export default Gradientbtn;
