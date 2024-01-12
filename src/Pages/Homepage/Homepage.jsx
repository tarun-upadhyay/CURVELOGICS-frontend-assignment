import React, { useEffect, useState } from "react";
import HomepageNav from "./HomepageNav";
import AlertBar from "../../Components/AlertBar";
import axios from "axios";
import NewCards from "../../ui/Homepage/NewCards";
const Homepage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a6045871d5d463481c2a265bdf29a7d`
      )
      .then((res) => setNews(res.data.articles));
  }, []);
  console.log(process.env.REACT_APP_KEY);
  return (
    <div>
      <section className="bg-[#f9fbfe]">
        {/* Staring of Hero section's Navbar */} <AlertBar />
        <HomepageNav />
        <hr className="border-1 border-[#e3e4e7] my-4 hidden md:block" />
      </section>
      <main className="flex flex-col md:flex-row items-center gap-12 my-10 mb-20 mx-auto w-[95%] md:w-[80%]">
        <div className="md:p-5 py-10 md:py-5 mt-5 md:mt-0">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl text-[#314f6e] font-bold  md:w-[77%]">
              {" "}
              <span>
                Your Journey to Artificial Intelligence by{" "}
                <span className="text-pink-800">CURVELOGICS</span>.
              </span>
            </h1>
          </div>
          <div className="md:w-[77%]" id="features">
            <p className="md:my-10 mt-20 md:mt-10 text-lg text-[#313f58]">
              Choose Your Goals, Achieve Them with AI-Powered Guidance
            </p>
            <button className="bg-[#000645] text-white px-12 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:translate-y-1 hover:bg-[#9b51e0] flex items-center gap-3 mt-10 md:mt-0">
              Join Us
            </button>
          </div>
        </div>
        <figure>
          <img
            src="https://www.curvelogics.com/wp-content/uploads/2020/05/jessica-lewis-DeyfdybVQhA-unsplash-scaled.jpg"
            alt="hero section img"
            className="h-4/5 w-[1200px] rounded-3xl"
          />
        </figure>
      </main>

      <div className="my-5">
        <h1 className="leading-7 text-6xl text-center font-semibold text-[#313f58]">
          Top News & Weather Details
        </h1>
        {news.length > 0 &&
          news.map((el, i) => {
            return <NewCards data={el} key={i} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
