import React from "react";
import { HiLightBulb } from "react-icons/hi";
import img from '../images/pic1.jpeg'

function RecentBlogs() {
    // recent blog array
  const RecentBlogList = [
    {
      title: "Project 1",
      desgin: "Web desgin",
      content:
        "here is all the content that you can watch and see. Read and Enjoy",
    },
    {
      title: "Project 2",
      desgin: "Next.js",
      content:
        "here is all the content that you can watch and see. Read and Enjoy",
    },
    {
      title: "Project 3",
      desgin: "React",
      content:
        "here is all the content that you can watch and see. Read and Enjoy",
    },
  ];

//  all blogs array
const AllblogsList=[
    {
       date:"Sunday,1 jan 2023",
       tittle:"Bill Wlash leadership lessons",
       content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        subtitle1:"Leadership",
        subtitle2:"Presenattion",
        subtitle13:"Management"
    },
    {
        date:"Sunday,1 jan 2023",
        tittle:"PM mental models",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"What is Wireframing?",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"Bill Wlash leadership lessons",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"Bill Wlash leadership lessons",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"Bill Wlash leadership lessons",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"Bill Wlash leadership lessons",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     {
        date:"Sunday,1 jan 2023",
        tittle:"Bill Wlash leadership lessons",
        content:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
         subtitle1:"Leadership",
         subtitle2:"Presenattion",
         subtitle13:"Management"
     },
     

] 


  return (
    // recent projects
    <div className="text-white">
      <div className="px-16 py-8 flex items-center justify-center">
        <p className="font-semibold text-xl">All Recent Blogs</p>
      </div>

      <div>
        {RecentBlogList.map((item) => (
          <RecentBlogDetails
            title={item.title}
            desgin={item.desgin}
            content={item.content}
          />
        ))}
      </div>
      
      {/*all blogs post  */}
      <div>
       <div className="px-16 py-8 flex items-center justify-center">
        <p className="font-semibold text-xl">All blog Post</p>
       </div>
        <div className="flex gap-3 flex-wrap items-center justify-center py-10">
            {AllblogsList.map((data)=>(
                 <AllblogPost date={data.date} tittle={data.tittle} content={data.content} subtitle1={data.subtitle1} subtitle2={data.subtitle2} subtitle13={data.subtitle13} />
            ))}
         
        </div>
      </div>
    </div>
  );
}
//    recent blog details
const RecentBlogDetails = ({ title, desgin, content }) => (
  <div className="p-7 rounded-xl shadow-md mx-auto  mb-4  bg-slate-900 max-w-4xl">
    <div className="flex justify-center items-center gap-3">
      <div>
        <HiLightBulb size={70} />
      </div>
      <div>
        <div className="flex gap-8">
          <p>{title}</p>
          <p className=" text-green-400 bg-gradient-to-r from-indigo-500 text-sm p-1 rounded-lg">
            {desgin}
          </p>
        </div>

        <p>{content}</p>
      </div>
    </div>
  </div>
);

// all blog post
const AllblogPost=({date,tittle,content,subtitle1,subtitle2,subtitle13})=>(
    <div className="mx-10">
       <div>
        <img src={img}/>
        <p className="text-blue-500 py-4">{date}</p>
        <p>{tittle}</p>
        <p className="w-60">{content}</p>
        <div className="flex gap-5 py-5">
            <p className="bg-slate-50 text-cyan-600 rounded-lg p-1 text-xs">{subtitle1}</p>
            <p className="bg-slate-50 text-blue-800 rounded-lg p-1 text-xs">{subtitle2}</p>
            <p className="bg-slate-50 text-pink-600 rounded-lg p-1 text-xs">{subtitle13}</p>
        </div>
       </div>
    </div>
)

export default RecentBlogs;
