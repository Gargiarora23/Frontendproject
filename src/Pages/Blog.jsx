import React, { useState, useEffect } from "react";
import image1 from "../assets/pic1.jpg";
import image2 from "../assets/pic2.jpg";
import image3 from "../assets/pic3.jpg";
import blogpic from "../assets/pic3.jpg";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/users2.jpg";
import user3 from "../assets/users3.jpg";
import user4 from "../assets/users4.jpg";
import user5 from "../assets/users5.jpg";
import user6 from "../assets/users6.jpg";
import user7 from "../assets/users7.jpg";
import user8 from "../assets/users8.jpg";
import searchlogo from "../assets/searchlogo.png";
import arrowicon from "../assets/li_st4.png";


const userimage = [user1, user2, user3, user4, user5, user6, user7, user8];


const images = [image1, image2, image3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96  overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full"
          />
        ))}
      </div>

    
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8592;
      </button>

    
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8594;
      </button>
    </div>
  );
};

const Blog = () => {
  return (
<div className="w-full">
<img src={blogpic} className="w-full h-[60vh] object-cover" alt="Blog" />
<div className="flex flex-col lg:flex-row lg:ml-14 md:gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 py-4">
<div className="lg:w-1/5 md:pl-5 lg:pl-10 w-full">
<div className="text-sm mb-3 font-light">
 <a href="#" className="text-blue-400 hover:underline">Home</a> / Blog
</div>
      <div className="flex items-center mb-8 w-full max-w-sm">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center bg-white px-2 rounded-r-md">
          <img 
            src={searchlogo} 
            alt="Search Logo" 
            className="h-10 w-14 hover:contrast-50 cursor-pointer"
          />
        </div>
      </div>


      <h4 className="mb-5 text-lg md:text-xl font-semibold">Categories</h4>
<div className="text-neutral-500 text-sm md:text-base font-light">
  <ul className="space-y-1">
    {[
      { label: "Travel Agency", count: 125 },
      { label: "Flights", count: 97 },
      { label: "Hotels", count: 56 },
      { label: "Cruises", count: 24 },
      { label: "Car", count: 13 },
    ].map((item, idx) => (
      <li key={idx} className="px-2 sm:px-4">
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-3 hover:text-teal-500 hover:fill-teal-500 transition-colors"
        >
          <img
            src={arrowicon}
            alt={`${item.label} Icon`}
            className="w-4 sm:w-5 h-4 sm:h-5 min-w-4 min-h-4 transition-all duration-200"
          />
          <span className="flex-grow">{item.label}</span>
          <span className="text-neutral-400 text-xs sm:text-sm">{item.count}</span>
        </a>
        {idx < 4 && <div className="border-t border-gray-300 mt-2"></div>}
      </li>
    ))}
  </ul>
</div>
</div>

<div className="w-full sm:w-4/5 lg:w-2/3 max-w-screen-lg py-6 sm:py-8 pr-4 sm:pr-12 md:pr-16 lg:pr-24 xl:pr-32 overflow-hidden">
  <div className="bg-white rounded-lg">
    <Slideshow />
  </div>
</div>
</div>
{/* ///////////////////////////////////////////// */}

<div className="min-h-screen p-4 md:p-8 mt-4">
  {/* Main Container */}
  <div className="max-w-8xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 ml-16">
    {/* Left Sidebar */}
    <div className="md:col-span-1 space-y-3 relative sm:-mt-[15vh] md:-mt-[18vh] lg:-mt-[22vh]">
      <h3 className="font-bold text-lg sm:text-xl text-teal-600 mb-2 sm:mb-3">
        Popular
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        <li className="text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit
        </li>
        <li className="text-sm sm:text-base text-gray-600">
          Diam nonummy nibh euismod <br /> tincidunt ut laoreet dolore magna
        </li>
        <li className="text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit
        </li>
      </ul>


          
      <div>
  <h3 className="font-bold text-lg text-teal-600 mb-3 text-center sm:text-left mt-10">
    Popular Tags
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-2 sm:px-8 md:px-10 lg:px-20 justify-center -ml-20">
    {[
      "Flights",
      "Travel Agency",
      "Early Booking",
      "Hotels",
      "Cruises",
      "Car",
    ].map((tag) => (
      <span
        key={tag}
        className="text-xs sm:text-sm bg-gray-200 px-2 py-1 rounded-md text-gray-600 text-center"
      >
        {tag}
      </span>
    ))}
  </div>
</div>
</div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-2 lg:ml-[-4vh] md:ml-[-3vh] sm:ml-0">
  <div className="space-y-4">
    <h2 className="text-3xl font-medium text-gray-700 lg:-mt-16 md:-mt-12 sm:-mt-8">
      Lorem ipsum dolor sit amet
    </h2>
    <div className="text-gray-400 bg-neutral-50 font-[poppins] py-1 flex flex-wrap items-center gap-2">
      <span className="bg-teal-400 text-white px-2 py-2">
        April 16, 2016
      </span>
      <span>Posted by /</span>
      <span className="text-teal-500 font-medium">George Smith</span>
      <span>/ 26 Comments</span>
    </div>
 

<div className="py-3 flex flex-col sm:flex-row items-start gap-3 sm:gap-2 md:gap-2 lg:gap-3">
  <span className="bg-teal-400 text-white px-5 sm:px-4 text-4xl sm:text-7xl ml-1 font-bold">
    L
  </span>
  <p className="text-gray-400 text-xs sm:text-sm md:text-base ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh 
    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim 
    ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
    ut aliquip ex ea commodo consequat.
  </p>
</div>
</div>

<p className="text-neutral-400 text-sm sm:text-base md:text-base leading-relaxed sm:leading-normal px-4 sm:px-1 pb-5">
  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</p>

<div className="bg-neutral-800 text-neutral-100 p-4 w-full sm:w-[90%] md:w-[80%] sm:ml-12 md:ml-20">
  <blockquote className="text-xl font-semibold leading-relaxed">
    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut dolore aliquam erat volutpat.&rdquo;
  </blockquote>
  <p className="mt-4  text-teal-400">George Smith</p>
  <p className="text-gray-400 text-sm">Travel Agency</p>
</div>
</div>
</div>
</div>


    {/* ////////////////////////////////////////////////////////////////// */}
  
    <div className="min-h-screen p-4 md:p-8">
  {/* Main Container */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 ">
    {/* Left Sidebar */}
    <div className="md:col-span-1 space-y-6 md:-mt-[74vh]">
      {/* Customer Reviews */}
      <div className="bg-teal-600 text-white p-4 mt-24">
        <p className="text-lg font-semibold">
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.&rdquo;
        </p>
        <p className="mt-4 font-medium text-gray-200">Adam Parker</p>
      </div>
    
 {/* Text Widget */}
 <div className="bg-gray-200 p-4 h-auto md:h-[26vh] w-full max-w-[38vh] ml-3 md:ml-0">
  <h3 className="font-bold text-lg mb-3">Text Widget</h3>
  <p className="text-sm text-gray-600">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </p>
</div>

{/* Followers */}
<div>
  <h3 className="font-bold text-lg mb-5 mt-10 ">Followers</h3>
  <div className="grid grid-cols-4 gap-1">
    {userimage.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Follower ${index + 1}`}
        className="w-20 h-16 ml-3 object-cover"
      />
    ))}
  </div>
</div> 
</div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-3 -mt-[41vh] -ml-4 ">
           <div className="space-y-3 mb-8">
            <p className="text-gray-500 leading-6">
              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
            </p>
            <p className="text-gray-500 leading-6">
              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
            </p>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md ">VIEW POST</button>
          </div> 
          


          {/* Video Section */}
         
     
          <div className="relative w-full pb-[55%] pt-4">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/XhCkptbe7Z4?autoplay=1&mute=1&loop=1&playlist=XhCkptbe7Z4"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay; loop; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
</div>
</div>
</div>
 
 {/* //////////////////////////////////////// */}


 <div className="min-h-screen p-4 md:p-8 md:-mt-[31vh] ml-[10vh] md:ml-[31vh]">
  <div className="max-w-4xl mx-auto bg-white p-6 space-y-4">
    <h1 className="text-2xl md:text-3xl font-medium text-gray-700">
      Lorem ipsum dolor sit amet
    </h1>
    <div className="text-sm md:text-base text-gray-500 flex flex-wrap items-center space-x-4 bg-neutral-50 py-1">
      <span className="bg-teal-600 text-white px-2 py-1 rounded">
        April 16, 2016
      </span>
      <span>
        Posted by <a href="#" className="text-teal-600">George Smith</a>
      </span>
      <span>/ 26 Comments</span>
    </div>

        <div className="text-gray-500 space-y-4 px-4 md:px-0">
  <p className="text-base md:text-lg leading-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.
  </p>
  <p className="text-base md:text-lg leading-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
  </p>
  <button className="bg-teal-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
    VIEW POST
  </button>
</div>
</div>

      {/* Pagination */}
      <div className="max-w-4xl mx-auto mt-6 flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center text-xs sm:text-sm text-gray-600 gap-2">
  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md">
    &lt; Previous
  </button>
  <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2">
    {Array.from({ length: 10 }, (_, i) => (
      <button
        key={i}
        className={`px-2 sm:px-3 py-1 border rounded-md ${
          i === 1
            ? "bg-teal-600 text-white border-teal-600"
            : "border-gray-300 hover:bg-gray-200"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md">
    Next &gt;
  </button>
</div>

</div>
</div>
 );
};

export default Blog;











