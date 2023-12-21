import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Gradientbtn from "../../components/Gradientbtn";
import ProviderCard from "./ProviderCard";
import Testmonial from "./Testmonial";

function Landingpage() {
  return (
    <div>
      <Navbar />
      {/* homepage */}
      <div className="flex justify-between px-32  py-24 items-center bg-slate-950">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-6xl text-white">Create your</p>
          <p className="font-bold text-6xl text-white">Contents</p>

          <p className="text-white w-96">
            There is no passion to be found playing small in setting for a life
            that is less than the onw you are capable of living
          </p>
          <div>
            <Gradientbtn title="Get Started" />
          </div>
        </div>

        <div>
          <img src="https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_640.png" />
        </div>
      </div>

      {/*  our providers */}

      <div className="px-20 py-16 ">
        <div className="flex items-center justify-center ">
          <p className="text-white font-bold text-3xl   ">Our Providers</p>
        </div>
        <div className="flex flex-wrap gap-3 px-20 py-20  items-center justify-between ">
          <ProviderCard
            title="Personal Blogs"
            description="Individuals use blogs as a platform to share their thoughts experiences and personal stories with an online audience"
          />

          <ProviderCard
            title="Professional Blogs"
            description="Many professionals, including writers, journalists, photographers, and experts in various fields, use blogs to showcase"
          />

          <ProviderCard
            title="Business Blog"
            description="Businesses often maintain blogs as a part of their content marketing strategy. These blogs provide valuable informations"
          />

          <ProviderCard
            title="Educational Blogs"
            description="Educational institutions and educators use blogs to share educational content, resources, and updates with students 
            "
          />
        </div>
      </div>

      {/* Testmonials */}

      <div className="px-20 py-16 ">
        <div className="flex  items-center justify-center">
          <p className="text-white font-bold text-3xl   ">Testmonials</p>
        </div>

        <div className=" lg:flex flex-row lg:gap-3 justify-center items-center py-20 ">
          <Testmonial
            img="https://png.pngitem.com/pimgs/s/50-503557_young-man-png-image-background-nitro-canada-hair.png"
            title="mary john"
            about="CoFounder || CEO"
          />

          <Testmonial
            img="https://png.pngitem.com/pimgs/s/50-503557_young-man-png-image-background-nitro-canada-hair.png"
            title="john"
            about="CoFounder || CEO"
          />

          <Testmonial
            img="https://png.pngitem.com/pimgs/s/50-503557_young-man-png-image-background-nitro-canada-hair.png"
            title="mary john"
            about="CoFounder || CEO"
          />
        </div>
      </div>

      {/* latest articles */}
      <div className="py-16">
        <p className="text-white font-bold text-2xl text-center">
          Latest Articles
        </p>
        {/* div1 */}
        <div className="py-14">
          <div className="flex items-center justify-center px-52  gap-8 ">
            <div className="bg-indigo-200 w-3/5 h-60 rounded-2xl px-3 py-8">
              <button className="bg-slate-100 w-20 h-8 rounded-md text-indigo-400">
                Freelance
              </button>
              <div className="py-11 px-4">
                <p className="font-semibold text-xl">Freelancer $ WFH</p>
                <p> Learn how to be a freelancer and stay at home</p>
              </div>
            </div>
            <div className="bg-orange-200 w-2/5 h-60 rounded-2xl px-3 py-8 ">
              <button className="bg-slate-100 w-24 h-8 rounded-md text-orange-400">
                Tips$Tricks
              </button>
              <div className="py-11 px-4">
                <p className="font-semibold text-xl">Provide Tips</p>
                <p> Learn how to be a programmer, by others experiences</p>
              </div>
            </div>
          </div>

          {/* div2 */}
          <div className="lg:flex items-center justify-center px-52 py-10 gap-8 ">
            <div className="bg-amber-100 w-2/5 h-60 rounded-2xl px-3 py-8  ">
              <button className="bg-slate-100 w-20 h-8 rounded-md text-amber-500">
                Turorial
              </button>
              <div className="text-center">
                <p className="font-semibold text-xl">
                  Ready to Switch? its Simple
                </p>
                <p>connect with us for more blogs and contents</p>
              </div>
            </div>

            <div className="bg-fuchsia-300 w-3/5 h-60 rounded-2xl px-3 py-8">
              <button className="bg-slate-100 w-20 h-8 rounded-md  text-fuchsia-600">
                Projection
              </button>
              <div className="py-11 px-4">
                <p className="font-semibold text-xl">Build a solid Team</p>
                <p> if there's anything on your mind share your thoughts</p>
              </div>
            </div>
          </div>

          {/* div3 */}
          <div className="px-52">
            <div className="bg-purple-300  h-60 rounded-2xl px-10 py-28 flex justify-between">
              <div>
                <p className="font-semibold text-xl ">
                  Collect and Save inspirations
                </p>
                <p>you save and collect the blogs for the further uses</p>
                <button className="bg-fuchsia-600 w-20 h-8 rounded-md ">
                  Login
                </button>
              </div>

              <div className="flex gap-6">
                <img
                  className=" h-24 w-24 "
                  src="https://cf.ltkcdn.net/family/images/orig/285206-1600x1066-woman-on-mountain-top.jpg"
                />
                <img
                  className="h-24 w-24 "
                  src="https://cf.ltkcdn.net/family/images/orig/285206-1600x1066-woman-on-mountain-top.jpg"
                />
                <img
                  className="h-24 w-24"
                  src="https://cf.ltkcdn.net/family/images/orig/285206-1600x1066-woman-on-mountain-top.jpg"
                />
              </div>
            </div>
          </div>
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
