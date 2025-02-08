import React from 'react'
import travelagencytag from "../assets/Travelagencytag.png";

const Content = () => {
  return (
    // <footer className="bg-neutral-800 text-gray-300 ">
    //     <div className="border-t border-[4px] border-teal-600"></div>
    //     <div className="container mx-auto pr-[30vh] pl-[30vh]  py-10 grid  lg:grid-cols-4 sm:grid-cols-2">
    //       <div>
    //         <img src={travelagencytag} alt="not found" className="max-w-full" />
    //         <p className="text-sm mb-4 text-neutral-400">
    //         Nam liber tempor cum soluta nobis option congue nihil imperdiet doming id quod mazim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
    //         </p>
    //         <a href="#" className="text-teal-500 hover:underline">
    //           Read More →
    //         </a>
    //       </div>

    //       <div>
    //         <h2 className="text-2xl text-neutral-600 mt-[6vh] ml-[3vh] font-extrabold mb-6">
    //           Travel Specialists
    //         </h2>
    //         <ul className="space-y-2 ml-[8vh]">
    //           <li>
    //             <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
    //               First Class Flights
    //             </a>
    //           </li>
    //           <div className="border-t border-gray-600 "></div>
    //           <li>
    //             <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
    //               Accessible Travel
    //             </a>
    //           </li>
    //           <div className="border-t border-gray-600 "></div>
    //           <li>
    //             <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
    //               Amazing Cruises
    //             </a>
    //           </li>
    //           <div className="border-t  border-gray-600 "></div>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="text-2xl text-neutral-600 mt-[6vh] ml-[6vh] font-extrabold mb-6">
    //           Our Twitter
    //         </h2>
    //         <ul className="space-y-4 ml-[4vh] text-sm">
    //           <li>
    //             <p className="text-neutral-500">
    //               <a href="#" className="text-teal-500">
    //                 @travel
    //               </a>{" "}
    //               Lorem ipsum dolor sit amet.
    //             </p>
    //             <p className="text-neutral-600">5 minutes ago</p>
    //           </li>
    //           <li>
    //             <p className="text-neutral-500">
    //               <a href="#" className="text-teal-500">
    //                 @leo
    //               </a>{" "}
    //               Nam liber tempor soluta nobis option congue.
    //             </p>
    //             <p className="text-neutral-600">2 days ago</p>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="text-2xl text-neutral-600 mt-[6vh] ml-[6vh] font-extrabold mb-6">
    //           Newsletter
    //         </h2>
    //         <p className="text-neutral-500 ml-[4vh] text-sm mb-5">
    //           Inspiration, ideas, news and your feedback.
    //         </p>
    //         <form className="flex flex-col ml-[4vh] gap-2 sm:flex-row">
    //           <input
    //             type="email"
    //             placeholder="Email Address"
    //             className="w-full px-2 py-1 bg-neutral-950 font-light focus:outline-none focus:ring-2 focus:ring-teal-500"
    //           />
    //           <button className="px-3 py-1 bg-red-600 text-white hover:bg-teal-500">
    //             Submit
    //           </button>
    //           </form>
    //           <p className="text-teal-500 text-2xl mt-4 ml-[4vh]">1-917-338-6831</p>
    //           <p className="text-neutral-600 ml-[4vh]">support@templates-support.com</p>

    //       </div>
    //     </div>

    //     <div className="bg-teal-500 text-center py-4 text-md font-semibold">
    //       <p>
    //         Copyright © 2017 <span className="font-bold">MECOVACHE</span> |{" "}
    //         <a href="#" className="hover:underline">
    //           Privacy Policy
    //         </a>{"  "}
    //         |{" "}
    //         <a href="#" className="hover:underline">
    //            About Us
    //         </a>{" "}
    //         |{" "}
    //         <a href="#" className="hover:underline">
    //           FAQ
    //         </a>{" "}
    //         |{" "}
    //         <a href="#" className="hover:underline">
    //           Contact Support
    //         </a>
    //       </p>
    //     </div>
    //   </footer>
    <footer className="bg-neutral-800 text-gray-300">
  <div className="border-t border-[4px] border-teal-600"></div>

  <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Logo & About Section */}
    <div>
      <img src={travelagencytag} alt="not found" className="max-w-full" />
      <p className="text-sm mb-4 text-neutral-400">
        Nam liber tempor cum soluta nobis option congue nihil imperdiet doming id quod mazim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
      </p>
      <a href="#" className="text-teal-500 hover:underline">
        Read More →
      </a>
    </div>

    {/* Travel Specialists */}
    <div>
      <h2 className="text-2xl text-neutral-600 font-extrabold mb-4">
        Travel Specialists
      </h2>
      <ul className="space-y-2">
        {["First Class Flights", "Accessible Travel", "Amazing Cruises"].map((item, index) => (
          <li key={index} className="border-t border-gray-600 pt-2">
            <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Twitter Feed */}
    <div>
      <h2 className="text-2xl text-neutral-600 font-extrabold mb-4">
        Our Twitter
      </h2>
      <ul className="space-y-4 text-sm">
        <li>
          <p className="text-neutral-500">
            <a href="#" className="text-teal-500">@travel</a> Lorem ipsum dolor sit amet.
          </p>
          <p className="text-neutral-600">5 minutes ago</p>
        </li>
        <li>
          <p className="text-neutral-500">
            <a href="#" className="text-teal-500">@leo</a> Nam liber tempor soluta nobis option congue.
          </p>
          <p className="text-neutral-600">2 days ago</p>
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h2 className="text-2xl text-neutral-600 font-extrabold mb-4">
        Newsletter
      </h2>
      <p className="text-neutral-500 text-sm mb-4">
        Inspiration, ideas, news, and your feedback.
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-3 py-2 bg-neutral-950 text-white font-light focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="px-4 py-2 bg-red-600 text-white hover:bg-teal-500">
          Submit
        </button>
      </form>
      <p className="text-teal-500 text-2xl mt-4">1-917-338-6831</p>
      <p className="text-neutral-600">support@templates-support.com</p>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="bg-teal-500 text-center py-4 text-md font-semibold">
    <p>
      Copyright © 2017 <span className="font-bold">MECOVACHE</span> |
      <a href="#" className="hover:underline"> Privacy Policy</a> |
      <a href="#" className="hover:underline"> About Us</a> |
      <a href="#" className="hover:underline"> FAQ</a> |
      <a href="#" className="hover:underline"> Contact Support</a>
    </p>
  </div>
</footer>

  )
}

export default Content