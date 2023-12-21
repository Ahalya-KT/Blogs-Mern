import React from 'react'
import BlogNav from '../../components/BlogNav'
import TheblogTitlle from '../../components/TheblogTitlle'
import RecentBlogs from '../../components/RecentBlogs'
import Footer from '../../components/Footer'

function AllBlogspage() {
  return (
    <div className=' bg-slate-950'>
         {/* navbar */}
         <BlogNav />

         {/* title */}
          <TheblogTitlle/>

          <RecentBlogs/>

         <Footer/>
    </div>
  )
}

export default AllBlogspage