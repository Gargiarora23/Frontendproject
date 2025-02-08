// import React from "react";
// import erroricon from "../assets/erroricon.png";
// import travelagencytag from "../assets/Travelagencytag.png";

// const Contact = () => {
//   return (
//     <div className="">
//       <div className="border-t border-gray-400 my-1"></div>
//       <div className="bg-slate-200 flex flex-col items-center justify-center h-[65vh] sm:h-[60vh] p-4">
//         <img
//           src={erroricon}
//           className="w-16 h-16 mb-4"
//           alt="Error icon not found"
//         />
//         <h1 className="text-lg sm:text-base font-semibold text-neutral-600">
//           Oops! Something Went Wrong.
//         </h1>
//         <p className="text-sm text-neutral-600 text-center mt-2">
//           This page didn't load Google Maps correctly. See the JavaScript
//           console for technical details.
//         </p>
//       </div>

//       <div className="border-t border-gray-400 my-1"></div>

//       <div className="text-sm mb-4 px-4 sm:px-8">
//         <a href="#" className="text-blue-400 hover:underline">
//           Home
//         </a>{" "}
//         / Contacts
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//     {/* Contact Info */}
//     <div>
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-600 mb-6">
//         CONTACT INFO
//       </h1>
//       <p className="text-neutral-400 mb-8 text-sm sm:text-base leading-6">
//         Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
//         molestie consequat, vel illum dolore eu feugiat nulla facilisis at
//         vero eros et accumsan et iusto odio dignissim qui blandit praesent
//         luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
//       </p>
//       <div className="space-y-6 sm:space-y-8">
//         <div>
//           <h2 className="text-blue-400 font-bold">ADDRESS</h2>
//           <p className="text-neutral-400 text-sm">
//             795 Fake Ave, Door 6
//             <br />
//             Wonderland, CA 94107, USA
//           </p>
//           <a href="mailto:info@yourdomain.com" className="text-blue-400 underline">
//             info@yourdomain.com
//           </a>
//         </div>

//         <div>
//           <h2 className="text-blue-400 font-bold">PHONE</h2>
//           <p className="text-neutral-400 text-sm">
//             +440 875369208
//             <br />
//             +440 353363114
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Contact Form */}
//     <div>
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-600 mb-6">
//         CONTACT FORM
//       </h1>
//       <form className="space-y-6">
//         <div>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full h-12 border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="E-mail Address"
//             className="w-full h-12 border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder="Message"
//             rows="4"
//             className="w-full border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
//           ></textarea>
//         </div>
//         <div>
//           <button className="bg-blue-500 hover:bg-red-600 text-white py-2 px-6 rounded-md">
//             SEND MESSAGE
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>


//       <footer className="bg-neutral-800 text-gray-300 mt-14">
//         <div className="border-t border-[1vh] border-teal-500"></div>
//         <div className="container mx-auto px-6 py-10 grid gap-6 lg:grid-cols-4">
//           <div>
//             <img src={travelagencytag} alt="not found" />
//             <p className="text-sm mb-4 text-neutral-400">
//               Nam liber tempor cum soluta nobis option congue nihil imperdiet
//               doming id quod mazim.
//             </p>
//             <a href="#" className="text-teal-500 hover:underline">
//               Read More →
//             </a>
//           </div>

//           <div>
//             <h2 className="text-2xl text-neutral-500 font-extrabold mb-4">
//               Travel Specialists
//             </h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
//                   First Class Flights
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
//                   Accessible Travel
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-teal-500 text-neutral-400 font-light">
//                   Amazing Cruises
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl text-neutral-400 font-extrabold mb-4">
//               Our Twitter
//             </h2>
//             <ul className="space-y-4 text-sm">
//               <li>
//                 <p className="text-[15px] text-neutral-400">
//                   <a href="#" className="text-teal-500 text-[15px]">
//                     @travel
//                   </a>{" "}
//                   Lorem ipsum dolor sit amet.
//                 </p>
//                 <p className="text-neutral-600">5 minutes ago</p>
//               </li>
//               <li>
//                 <p className="text-[15px] text-neutral-400">
//                   <a href="#" className="text-teal-500 text-[15px]">
//                     @leo
//                   </a>{" "}
//                   Nam liber tempor soluta nobis option congue.
//                 </p>
//                 <p className="text-neutral-600">2 days ago</p>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl text-neutral-400 font-extrabold mb-4">Newsletter</h2>
//             <p className="text-neutral-400 text-sm mb-4">
//               Inspiration, ideas, news and your feedback.
//             </p>
//             <form className="flex space-x-2 mb-4">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-3 py-2 bg-neutral-950 font-extralight focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button className="px-4 py-2 bg-red-600 text-white hover:bg-teal-500">
//                 Submit
//               </button>
//             </form>
//             <p className="text-lg font-bold text-teal-500 mb-1">1-917-338-6831</p>
//             <a
//               href="mailto:support@templates-support.com"
//               className="underline hover:no-underline text-neutral-500 font-light"
//             >
//               support@templates-support.com
//             </a>
//           </div>
//         </div>

//         <div className="bg-teal-500 text-center py-4 text-sm">
//           <p>
//             Copyright © 2017 <span className="font-bold">MECOVACHE</span> |{' '}
//             <a href="#" className="hover:underline">
//               Privacy Policy
//             </a>{' '}
//             |{' '}
//             <a href="#" className="hover:underline">
//               About Us
//             </a>{' '}
//             |{' '}
//             <a href="#" className="hover:underline">
//               FAQ
//             </a>{' '}
//             |{' '}
//             <a href="#" className="hover:underline">
//               Contact Support
//             </a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import erroriconn from "../assets/erroricon.png";


const Contact = () => {
  return (
    <div>
  
    <div className="bg-white">
      <div className="border-t border-gray-400 my-1"></div>
      <div className="bg-slate-200 flex flex-col items-center justify-center min-h-[60vh] p-4">
        <img
          src={erroriconn}
          className="w-16 h-16 mb-4 max-w-full"
          alt="Error icon not found"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 text-center">
          Oops! Something Went Wrong.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 text-center mt-2">
          This page didn't load Google Maps correctly. See the JavaScript console for technical details.
        </p>
      </div>

      <div className="border-t border-gray-400 my-1"></div>

      <div className="text-sm mb-4 px-4 sm:px-8">
        <a href="#" className="text-blue-400 hover:underline">
          Home
        </a>{" "}
        / Contacts
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 mb-6">
              CONTACT INFO
            </h1>
            <p className="text-neutral-400 mb-6 text-sm sm:text-base leading-6">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat...
            </p>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-blue-400 font-bold">ADDRESS</h2>
                <p className="text-neutral-400 text-sm">
                  795 Fake Ave, Door 6
                  <br />
                  Wonderland, CA 94107, USA
                </p>
                <a
                  href="mailto:info@yourdomain.com"
                  className="text-blue-400 underline"
                >
                  info@yourdomain.com
                </a>
              </div>

              <div>
                <h2 className="text-blue-400 font-bold">PHONE</h2>
                <p className="text-neutral-400 text-sm">
                  +440 875369208
                  <br />
                  +440 353363114
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 mb-6">
              CONTACT FORM
            </h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-12 border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full h-12 border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border-gray-300 border rounded-md p-3 focus:ring-green-500 focus:border-green-500"
              ></textarea>
              <button className="w-full bg-blue-500 hover:bg-red-600 text-white py-2 px-6 rounded-md">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
   

    </div>
  );
};

export default Contact;


