import React, { useEffect, useState } from 'react';
import 'animate.css';
import banner from "../assets/about_banner.jpg";
import hover1 from "../assets/why1_hover.png";
import hover2 from "../assets/why2_hover.png";
import hover3 from "../assets/why3_hover.png";
import hover4 from "../assets/why4_hover.png";
import change1 from "../assets/why1.png";
import change2 from "../assets/why2.png";
import change3 from "../assets/why3.png";
import change4 from "../assets/why4.png";
import company from "../assets/company1.png";
import team1 from "../assets/team01.jpg";
import team2 from "../assets/team02.jpg";
import team3 from "../assets/team03.jpg";
import team4 from "../assets/team04.jpg";

const Aboutus = () => {
  const [progressData, setProgressData] = useState([
    { label: 'Flights', progress: 0, target: 70 },
    { label: 'Hotels', progress: 0, target: 50 },
    { label: 'Car', progress: 0, target: 30 },
    { label: 'Cruises', progress: 0, target: 90 },
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
    }, 30); // Adjust animation speed here

    return () => clearInterval(interval);
  }, []);

  const titles = ["Amazing Travel", "Discover", "Book your Trip", "Nice Support"];
  const featuresDescription = [
    "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
    "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
    "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
    "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim."
  ];

  return (
    <>
      <div className="container mx-auto mt-5 ">
        {/* Banner Section - add responsive padding */}
        <div className="flex flex-col items-center">
          <img
            src={banner}
            alt="About Banner"
            className="w-full object-cover mt-1 h-[200px] sm:h-[200px] lg:h-[300px] lg:w-full sm:w-full md:w-full animate__animated animate__fadeIn"
          />
          <div className="mt-2 text-sm sm:text-base">
            <a href="#" className="text-teal-500 hover:underline">
              Home
            </a>{" "}
            / Contacts
          </div>
        </div>

        {/* Why We Are the Best Section */}
        <div className="text-center my-20 fade-in">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-neutral-600">
            WHY WE ARE THE BEST
          </p>
          <p className="text-lg mt-7 text-neutral-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod <br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        {/* Features Section - improve responsive grid and spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 px-4 sm:px-6 lg:px-32">
          {[change1, change2, change3, change4].map((image, index) => (
            <div
              key={index}
              className="text-center group relative fade-in animate__animated animate__zoomIn"
            >
              <div className="relative w-16 h-16 mx-auto">
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
              <p className="mt-6 text-neutral-500 text-2xl sm:text-xl lg:text-2xl font-medium transition duration-300 group-hover:text-teal-500">
                {titles[index]}
              </p>
              <p className="mt-2 text-neutral-400 text-sm">
                {featuresDescription[index]}
              </p>
              <a href="#" className="text-neutral-300 group-hover:underline group-hover:text-teal-500">
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* What We Offer Section - fix responsive padding and layout */}
        <div className="bg-neutral-50 mt-20 text-center fade-in py-8 sm:py-12 lg:py-16 px-4">
          <p className="text-5xl sm:text-3xl lg:text-5xl font-medium text-neutral-700">
            WHAT WE OFFER?
          </p>
          <p className="text-sm sm:text-xl mt-7 text-neutral-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>

          <div className="flex flex-col md:flex-row lg:px-8 xl:px-32 mt-14">
            <div className="w-full md:w-1/2 px-4 sm:px-8 md:pl-[5vh] lg:pl-[10vh] space-y-2">
              {[ 
                "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;",
                "Option congue nihil imperdiet doming id quod mazim placerat facer;",
                "Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes;",
                "Investigationes demonstraverunt lectores."
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-teal-500 text-2xl">&#10689;</div>
                  <p className="text-neutral-400 text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 border-l-0 md:border-l-2 border-teal-500 mt-8 md:mt-0 px-4 sm:px-8 md:pl-6 md:pr-[10vh] lg:pr-[23vh]">
              <p className="text-neutral-400 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* About Company Section - improve responsive layout */}
        <div className="px-4 sm:px-6 lg:px-32 my-20">
          <p className="text-center text-2xl sm:text-3xl lg:text-5xl font-medium text-neutral-600">
            ABOUT OUR COMPANY
          </p>
          <p className="text-center text-sm sm:text-base lg:text-lg mt-4 text-gray-400 pl-[4vh] pr-[4vh]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br/>
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>

          <div className="flex flex-col md:flex-row items-center mt-12 gap-6 lg:gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={company} alt="Company" className="w-3/4 md:w-auto" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col md:items-start px-4 sm:px-0">
              <p className="text-3xl ">TRAVEL AGENCY</p>
              <p className=" text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br/>
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad <br/>
                minim veniam, quis nostrud exerci tation ullamcorper suscipit.
              </p>

              <div className="w-full mt-6 space-y-4">
                {progressData.map((task, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">{task.label}</span>
                      <span className="text-teal-500 font-bold">{task.progress}%</span>
                    </div>
                    <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-500 h-4 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - improve responsive layout */}
        <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-neutral-100">
          <p className="text-center text-[30px] sm:text-[28px] md:text-[30px] font-medium mt-4 sm:mt-6 md:-mt-[50px]">OUR TEAM</p>
          <p className="text-center text-sm sm:text-base md:text-lg mt-2 sm:mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br className="hidden sm:block" />tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><br/><br/>
        </div>

        <div className="bg-gray-100 flex flex-col sm:flex-row flex-wrap justify-center gap-8 py-8">
          {[
            { img: team1, name: "Jynda Martin" },
            { img: team2, name: "George Simth" },
            { img: team3, name: "Bill Amadeus" },
            { img: team4, name: "Amanda Stoun" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center mx-auto p-4 w-full sm:w-[45%] lg:w-[22%]">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full max-w-[300px] h-auto object-cover"
              />
              <p className="text-lg md:text-2xl text-gray-600 mt-4">{member.name}</p>
              <p className="text-sm md:text-base text-gray-400 text-center mt-2">
                Nam liber tempor cum soluta nobis<br /> 
                eleifend option congue nihil imperdiet<br /> 
                doming id quod mazim.
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Aboutus;

