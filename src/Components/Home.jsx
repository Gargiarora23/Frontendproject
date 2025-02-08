import React, { useState, useEffect } from "react";
import Travel from "../Assets/travell.webp";
import hover1 from "../assets/why1_hover.png";
import hover2 from "../Assets/why2_hover.png";
import hover3 from "../Assets/why3_hover.png";
import hover4 from "../Assets/why4_hover.png";
import change1 from "../Assets/why1.png";
import change2 from "../Assets/why2.png";
import change3 from "../Assets/why3.png";
import change4 from "../Assets/why4.png";
import corousel from "../Assets/corousel.jpg";
import popular02 from "../Assets/popular02.jpg";
import popular01 from "../Assets/popular01.jpg";
import popular03 from "../Assets/popular03.jpg";
import people from "../Assets/people.png";
import partner1 from "../Assets/partner1_hover.jpg";
import partner2 from "../Assets/partner2_hover.jpg";
import partner3 from "../Assets/partner3_hover.jpg";
import partner4 from "../Assets/partner4_hover.jpg";
import partner5 from "../Assets/partner5_hover.jpg";
import partner6 from "../Assets/partner6_hover.jpg";
import tile from "../assets/tilee.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// import Slider from "react-slick";


const Home = () => {
let icon=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>)
let icon1=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" /></svg>)
let icon2=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z" clip-rule="evenodd" />
  <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" /></svg>)
let icon3=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" /></svg>)

const [progressData, setProgressData] = useState([
  { label: "Flights", progress: 0, target: 70 },
  { label: "Hotels", progress: 0, target: 50 },
  { label: "Car", progress: 0, target: 30 },
  { label: "Cruises", progress: 0, target: 90 },
]);

useEffect(() => {
  const interval = setInterval(() => {
    setProgressData((prevData) =>
      prevData.map((item) => {
        if (item.progress < item.target) {
          return { ...item, progress: item.progress + 1 };
        }
        return item;
      })
    );
  }, 30); 

  return () => clearInterval(interval);
}, []);

const titles = ["Amazing Travel", "Discover", "Book your Trip", "Nice Support"];
const featuresDescription = [
  "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim."
];

const texts = [
  { title: "Welcome to our", details: "TRAVEL AGENCY"},
  { title: "12 -Day Cruises", details: "FROM GREECE TO SPAIN" },
  { title: "7-Day Tour", details: "AMAZING CARIBBEAN" },
  { title: "5 Days In", details: "PARIS (Capital Of World)" },

];


const [currentTextIndex, setCurrentTextIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Text change every 3 seconds

    return () => clearInterval(interval);
  }, []);

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });


return (
  <div className="animate_animated animatefadeInLeft animate_slow">
<div className="min-h-screen w-full overflow-x-hidden">
  {/* Hero Section with Search */}
  <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[110vh]">
    <img 
      src={Travel} 
      className="w-full h-full object-cover" 
      alt="Travel background" 
    />

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
           <div>
            <div className="text-xl bg-teal-400 bg-opacity-65 text-left mr-[90vh] -ml-[30vh]">{texts[currentTextIndex].title}</div>
            <div className="text-4xl mt-4 font-bold bg-teal-400 bg-opacity-65 text-left mr-[90vh] -ml-[30vh]">{texts[currentTextIndex].details}</div>
          </div>
        </motion.div>
      </div>


  <div className="absolute top-0 w-full h-full bg-black/20"></div>
    
    <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-7xl mx-auto -mt-[120px] sm:-mt-[150px] md:-mt-[177px] z-10 px-3 sm:px-6 md:px-[10vh]">
      <div className="bg-neutral-50 rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-0 mb-4 sm:mb-7 p-3 sm:p-0">
          <button className="px-3 sm:px-4 py-2 bg-gray-100 text-teal-500 font-semibold rounded flex items-center gap-2 text-sm sm:text-base">
            {icon1}Flights
          </button>
          <button className="px-3 sm:px-4 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 text-sm sm:text-base">
            {icon}Hotels
          </button>
          <button className="px-3 sm:px-4 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 text-sm sm:text-base">
            {icon2}Cars
          </button>
          <button className="px-3 sm:px-4 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 text-sm sm:text-base">
            {icon3}Cruises
          </button>
        </div>

        {/* Search Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 pb-5 px-3 sm:px-5">
          {/* Flying From */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              Flying from:
            </label>
            <select className="w-full text-sm px-3 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500">
              <option>City or Airport</option>
              <option>Alaska</option>
              <option>Bahamas</option>
              <option>Canada</option>
            </select>
          </div>

          {/* To */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              To:
            </label>
            <select className="w-full text-sm px-3 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500">
              <option>City or Airport</option>
              <option>Alaska</option>
              <option>Bahamas</option>
              <option>Canada</option>
            </select>
          </div>

          {/* Departing */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              Departing:
            </label>
            <input
              type="date"
              className="w-full text-sm px-3 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Returning */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              Returning:
            </label>
            <input
              type="date"
              className="w-full text-sm px-3 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Adult */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              Adult:
            </label>
            <select className="w-full sm:w-[70%] text-sm px-4 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* Child */}
          <div className="w-full">
            <label className="block text-sm mb-1 sm:mb-2 font-medium text-gray-700">
              Child:
            </label>
            <select className="w-full sm:w-[70%] text-sm px-4 py-2 border rounded text-neutral-300 focus:ring-teal-500 focus:border-teal-500">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full lg:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-red-500 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        <div className="border-t-2 border-teal-500 w-full"></div>
      </div>
    </div>
  </div>


  <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      className="mt-8 sm:mt-12 px-4"
    >
      <motion.h2 variants={fadeInUp} className="text-center text-2xl sm:text-3xl md:text-4xl font-medium">
        WHY WE ARE THE BEST
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-center text-neutral-400 text-sm sm:text-base md:text-lg mt-4 sm:mt-7">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        <br className="hidden sm:block" /> tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </motion.p>

      {/* Features Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-16 px-4 sm:px-6 md:px-[10vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {[change1, change2, change3, change4].map((image, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="text-center group relative"
          >
            <div className="relative w-12 sm:w-14 h-12 sm:h-14 mx-auto">
              <img
                src={image}
                alt={`Feature ${index}`}
                className="absolute inset-0 w-full h-full transition duration-300 group-hover:opacity-0"
              />
              <img
                src={[hover1, hover2, hover3, hover4][index]}
                alt={`Feature ${index} Hover`}
                className="absolute inset-0 w-full h-full opacity-0 transition duration-300 group-hover:opacity-100"
              />
            </div>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-neutral-500 transition duration-300 group-hover:text-teal-500">
              {titles[index]}
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-400">
              {featuresDescription[index]}
            </p>
            <a href="#" className="inline-block mt-2 text-sm sm:text-base text-neutral-300 group-hover:underline group-hover:text-teal-500">
              Read More →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

  {/* *************************** */}


<div className="mt-8 md:mt-10">
  {/* Responsive Image */}
  <img src={corousel} alt="not found" className="w-full h-auto md:h-[60vh] object-cover" />

  {/* Text Content */}
  <div className="relative md:-mt-72 lg:-mt-[270px] px-4 sm:px-6 md:px-10">
    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#fff799] font-bold">
      Caucasus Vacation Packages
    </p>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
      <br className="hidden md:block" /> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
    </p>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#fff799] mt-4">
      From: Khazbegi (Georgia)
      <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl ml-2">$159.00 person</span>
    </p>
  </div>

  {/* Button Section */}
  <div className="flex justify-end -mt-[8vh] sm:-mt-[10vh] md:-mt-[12vh] mr-4 sm:mr-6 md:mr-[8vh]">
    <button className="px-6 sm:px-7 font-bold py-2 bg-red-500 text-white rounded hover:bg-teal-500 transition duration-300">
      DETAIL
    </button>
  </div>
</div>


  {/* *********************** */}

  <div className="mt-24 sm:mt-32 lg:mt-48">
  <p className="text-4xl text-center font-medium">POPULAR CRUISES</p>
  <p className="text-neutral-400 text-center mt-6 px-6 sm:px-10 md:px-20 lg:px-32">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
    <br className="hidden md:block" />
    tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </p>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 mt-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { 
        img: popular02, 
        title: "Bahamas", 
        deal: "17 Deal offers", 
        nights: "7 Night Tour", 
        reviews: "18 Reviews", 
        rating: 5 
      },
      { 
        img: popular01, 
        title: "Mediterranean", 
        deal: "17 Deal offers", 
        nights: "18 Night Tour", 
        reviews: "168 Reviews", 
        rating: 5 
      },
      { 
        img: popular03, 
        title: "Greece", 
        deal: "17 Deal offers", 
        nights: "6 Night Tour", 
        reviews: "16 Reviews", 
        rating: 4.5 
      }
    ].map((cruise, index) => (
      <div key={index} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img src={cruise.img} alt={cruise.title} className="w-full h-60 object-cover rounded-t-lg" />
          <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center items-start p-5 text-white">
            <p className="text-lg font-bold">{cruise.title} <span className="text-yellow-500">{cruise.deal}</span></p>
            <p className="text-sm mt-1">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="px-5 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold group-hover:text-teal-500 transition-colors duration-300">{cruise.title}</h3>
            <p className="text-red-500 font-bold text-sm">{cruise.nights}</p>
          </div>
          <p className="text-gray-600 text-sm mt-2">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>
          <div className="flex items-center mt-4">
            <div className="flex items-center text-yellow-500 text-sm">
              {[...Array(Math.floor(cruise.rating))].map((_, i) => (<span key={i}>&#9733;</span>))}
              {cruise.rating % 1 !== 0 && <span>&#9734;</span>}
            </div>
            <span className="ml-2 text-gray-500 text-sm">- {cruise.reviews}</span>
            <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">SEE ALL</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-teal-500 transition-all duration-300"></div>
      </div>
    ))}
  </div>
</div>




<div className="relative w-full h-auto md:h-[80vh] mt-20">
  {/* Background Image */}
  <img
    src={tile}
    className="absolute inset-0 w-full h-auto md:h-[85vh] object-cover"
    alt="not found"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 bg-black opacity-50 md:h-[85vh]"></div> 

  {/* Content Wrapper */}
  <div className="relative text-white px-4 sm:px-6 md:px-12 py-12 flex items-center justify-center h-full">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
      
      {/* Left Section: Image */}
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center"
      >
        <img
          src={people}
          alt="Couple with luggage"
          className="max-w-full h-auto mt-10 sm:mt-[10vh] md:mt-[20vh]"
        />
      </motion.div>

      {/* Right Section: Text and Progress Bars */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="mb-2 leading-relaxed text-2xl sm:text-3xl md:text-[40px] font-semibold">
          HAPPY CUSTOMER
        </p>
        <p className="leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, set amet.
        </p>
        <br />
        <p className="leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit dolore magna aliquam erat volutpat.
        </p>
        <p className="leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
        </p>

        {/* Progress Bars */}
        <div className="w-full mt-6 space-y-4">
          {progressData.map((task, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  {task.label}
                </span>
                <span className="text-teal-300 font-bold text-xs sm:text-sm">
                  {task.progress}%
                </span>
              </div>
              <div className="bg-gray-600 h-3 sm:h-4 rounded-full overflow-hidden">
                <div
                  className="bg-teal-500 h-3 sm:h-4 rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
       

   </div>
  </div>
</div>


   
  {/* ******************** */}

  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-44 py-8 sm:py-12 md:py-16 mt-6 md:mt-10">
  {partners.map((partner, index) => (
    <motion.div 
      key={index} 
      className="group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={partner}
        alt={`Partner ${index + 1}`}
        className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-auto transition-all duration-300 ease-in-out group-hover:filter group-hover:grayscale"
      />
    </motion.div>
  ))}
</div>


</div>
</div>

);
};

export default Home;