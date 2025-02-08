import React from "react";
import errors from "../assets/erroricon.png";
import hotel1 from "../assets/hotels01.jpg";
import hotel2 from "../assets/hotels02.jpg";
import hotel3 from "../assets/hotels03.jpg";
import hotel4 from "../assets/hotels04.jpg";
import hotel5 from "../assets/hotels05.jpg";
import hotel6 from "../assets/hotels06.jpg";
import hotel7 from "../assets/hotels07.jpg";
import hotel8 from "../assets/hotels08.jpg";
import hotel9 from "../assets/hotels09.jpg";




const Hotel = () => {
  
    let icon1=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" /></svg>)
      let icon2=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z" clip-rule="evenodd" />
        <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" /></svg>)
      let icon3=(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" /></svg>)
      let icon=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>)
      let icon4=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>)
      let icon5=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>)
      let icon6=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" /></svg>)
      
      const passengerOptions = [1, 2, 3, 4];
      const sortByOptions = ["Name", "Name2", "Name3"];
      const priceOptions = ["Price", "Price2", "Price3"];
      const ratingOptions = ["Rating", "Rating2", "Rating3"];
      const popularityOptions = ["Popularity", "Popularity2", "Popularity3"];
      
      const HotelData = [
        { imgSrc: hotel1, name: "Normandy Hotel", price: "$250.00", details: "Normandy Hotel / Twin/Double Room",},
        { imgSrc: hotel2, name: "Hotel West-End", price: "$349.00", details: "Hotel West-End / Twin/Double Room",},
        { imgSrc: hotel3, name: "Chambiges Elysees", price: "$360.00",details: " Chambiges Elysees/ Twin/Double Room",},
        { imgSrc: hotel4, name: "Hamilton Hotel",price: "$268.00", details: "Hamilton Hotel / Twin/Double Room", },
        { imgSrc: hotel5, name: "Central Grand Hotel", price: "$50.00", details: "Central Grand Hotel / Twin/Double Room",},
        { imgSrc: hotel6, name: "Ambasador Premium", price: "$75.00", details: "Ambasador Premium / Twin/Double Room", },
        { imgSrc: hotel7, name: "Grand Plaza", price: "$150.00", details: "Grand Plaza / Twin/Double Room",},
        { imgSrc: hotel8, name: "Grand lberia", price: "$290.00",details: "Grand lberia / Twin/Double Room",},
        { imgSrc: hotel9, name: "Westminster Hotel", price: "$400.00", details: "Westminster Hotel / Twin/Double Room",},
      ];


  return (
    <div>
<div className="bg-white">
<div className="border-t border-gray-400 my-1"></div>
<div className="bg-slate-200 flex flex-col items-center justify-center min-h-[50vh] p-4">
  <img
    src={errors}
    className=" h-16 mb-4 max-w-full"
    alt="Error icon not found"
  />
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-600 text-center">
    Oops! Something Went Wrong.
  </h1>
  <p className="text-sm sm:text-sm md:text-sm lg:text-sm text-neutral-500 text-center mt-2 max-w-md">
    This page didn't load Google Maps correctly. See the JavaScript console for technical details.
  </p>
</div>
</div>
<div className="border-t border-neutral-400 my-1"></div>
<p className="text-teal-500 text-sm px-4 sm:px-6 md:px-8 ml-32">
<a href="/" className="hover:underline">Home</a> / 
<a href="/page" className="hover:underline"> Page</a> / 
<span className="text-gray-400">Flight</span>
</p>


      {/* ******************* */}
<div className='bg-neutral-50 mx-4 sm:mx-8 md:mx-12 lg:mx-40'>
<div className='mt-8 w-full'>
<div className="flex flex-wrap items-center mb-10 ">
  <button className="px-4 sm:px-6 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-sm">{icon1} Flights</button>
  <button className="px-4 sm:px-6 py-2 text-teal-500 bg-neutral-100 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-sm">{icon} Hotels</button>
  <button className="px-4 sm:px-6 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-sm">{icon2} Cars</button>
  <button className="px-4 sm:px-6 py-2 text-white bg-teal-500 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-sm">{icon3} Cruises</button>
  </div>
  <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative ml-10">
{[ 
   { label: "City or Hotel Name:", options: ["Enter a destination or hotel name", "lorem ispum", "ut visi enim", "sed diam" ,"At vero"] },
   { label: "Check-in:", type: "date" },
   { label: "Check-out:", type: "date" },
   { label: "Adults", options: ["1 Room", "2 Room", "SingleBed", "Double Bed", "Full Family"] },
      ].map((field, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-neutral-500">{field.label}:</label>
          {field.type === "date" ? (
            <input type="date" className="mt-1 w-full px-3 py-2 border text-sm rounded-md text-neutral-300 focus:ring-teal-500 focus:border-teal-500" />
          ) : (
            <select className="mt-1 w-full px-2 py-2 border text-sm rounded-md text-neutral-300 focus:ring-teal-500 focus:border-teal-500">
              {field.options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          )}
        </div>
      ))}
      <div className='px-3 py-2'>
        <button 
          type="submit" 
          className="px-7 py-2 mt-3 mb-7 bg-teal-500 text-white font-semibold rounded-md hover:bg-red-600 w-full sm:w-auto"
        >
          Search
        </button>
      </div>
    </form>
</div>
</div>
<div className="border-t border-teal-500 border-[3px] w-[173vh] mx-4 ml-[23vh]"></div>

<div className="flex flex-col md:flex-row md:space-x-4 mt-8 px-4 mx-auto max-w-full md:px-[220px]">
  {/* Passenger Selector */}
  <div className="flex items-center bg-neutral-50 p-4 h-16 md:w-[30vh] max-w-md mb-4 md:mb-0 mx-auto md:mx-0">
    <label className="font-medium text-neutral-500">Passenger:</label>
    <select className="ml-2 px-3 py-2 border text-gray-300 focus:ring-teal-500 focus:border-teal-500">
      {passengerOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>

<div className="flex bg-neutral-50 p-2 gap-4 flex-wrap md:w-auto h-16 mx-auto md:mx-0">
  <div className="flex flex-wrap gap-2 md:w-auto">
<div className="flex flex-col md:flex-row gap-2">
        <label className="text-sm mt-3 font-medium text-gray-500">Sort By:</label>
        <select className="px-3 border text-gray-300 focus:ring-teal-500 focus:border-teal-500">
          {sortByOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="flex flex-col md:flex-row gap-2">
        <label className="text-sm mt-3 font-medium text-gray-500">Price:</label>
        <select className="px-4 py-3 border h-12 text-gray-300 focus:ring-teal-500 focus:border-teal-500">
          {priceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div className="flex flex-col md:flex-row gap-2">
        <label className="text-sm mt-3 font-medium text-gray-500">Rating:</label>
        <select className="px-4 py-3 border rounded-md text-gray-300 focus:ring-teal-500 focus:border-teal-500">
          {ratingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Popularity */}
      <div className="flex flex-col md:flex-row gap-2">
        <label className="text-sm mt-3 font-medium text-gray-500">Popularity:</label>
        <select className="px-4 py-3 border rounded-md text-gray-300 focus:ring-teal-500 focus:border-teal-500">
          {popularityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Icons */}
    <div className="flex gap-4 mt-3 justify-center md:justify-start">
      <div className="hover:text-teal-500">{icon4}</div>
      <div className="hover:text-teal-500">{icon5}</div>
      <div className="hover:text-teal-500">{icon6}</div>
    </div>
  </div>
</div>
  
  {/* ******************** */}
  <div className="flex flex-col md:flex-row md:space-x-4 mt-12 px-4 md:px-40 ml-4 md:ml-[50px] gap-9">
  {/* Sidebar (Filters) */}
  <aside className="block text-sm font-medium text-gray-100">
    <div className="space-y-1 group">
      <button className="w-full md:w-[230px] flex justify-between items-center px-3 py-2 bg-gray-200 font-medium text-gray-700 hover:text-teal-500 hover:bg-neutral-50">
        Star Rating <span className="text-gray-500 text-2xl group-hover:text-teal-500">&#10689;</span>
      </button>
      <button className="w-full md:w-[230px] flex justify-between items-center px-3 py-2 bg-gray-200 font-medium text-gray-700 hover:text-teal-500 hover:bg-neutral-50">
        Price Range <span className="text-gray-500 text-2xl group-hover:text-teal-500">&#10689;</span>
      </button>
      <button className="w-full md:w-[230px] flex justify-between items-center px-3 py-2 bg-gray-200 font-medium text-gray-700 hover:text-teal-500 hover:bg-neutral-50">
        Departure Ports <span className="text-gray-500 text-2xl group-hover:text-teal-500">&#10689;</span>
      </button>
      <button className="w-full md:w-[230px] flex justify-between items-center px-3 py-2 bg-gray-200 font-medium text-gray-700 hover:text-teal-500 hover:bg-neutral-50">
        Trip Duration <span className="text-gray-500 text-2xl group-hover:text-teal-500">&#10689;</span>
      </button>
      <button className="w-full md:w-[230px] flex justify-between items-center px-3 py-2 bg-gray-200 font-medium text-gray-700 hover:text-teal-500 hover:bg-neutral-50">
        Ship <span className="text-gray-500 text-2xl group-hover:text-teal-500">&#10689;</span>
      </button>
    </div>
    <p className="text-sm mt-9 text-white bg-teal-500 p-3 py-10">
      Lorem ipsum dolor sit amet<br />, consectetur adipiscing elit.<br /> Sed do eiusmod tempor<br /> incididu ut labore et dolore <br />alternat magna aliqua. Ut <br />enim ad minim veniam. <br />
      <span className="text-yellow-300 font-bold block text-center mt-2">Adam Park</span>
    </p>
  </aside>

<div className="w-full md:w-4/5 lg:w-5/6 px-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {HotelData.map((Hotel, index) => (
        <div key={index} className="bg-gray-50 border-gray-100 p-3">
          <img src={Hotel.imgSrc} alt="not found" className="w-full h-40 rounded mb-4" />
          <p className="text-gray-500 text-[16px] ml-2">{Hotel.name}</p>
          <p className="text-red-500 font-bold text-[16px] ml-2">{Hotel.price}</p>
          <p className="text-gray-400 ml-2">
            {Hotel.avgPerson}
            <button className="ml-4 bg-teal-600 text-white py-0.5 px-2 rounded hover:bg-red-600 focus:outline-none">DETAILS</button>
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
  
  {/* //pagination// */}
  
  
      <div className="max-w-4xl mb-24 mx-auto mt-14 flex justify-between items-center text-sm text-gray-600">
          <button className="px-3 py-1 border border-gray-300 rounded-md">&lt; Previous</button>
          <div className="flex space-x-2">
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded-md ${
                  i === 1
                    ? "bg-teal-600 text-white border-teal-600"
                    : "border-gray-300 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button className="px-3 py-1 border border-gray-300 rounded-md">Next &gt;</button>
        </div>
         </div>
  
  )
}

export default Hotel