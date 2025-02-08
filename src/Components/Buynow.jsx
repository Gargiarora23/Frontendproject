import React from "react";
import { Link } from "react-router-dom";

const Buynow = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-white min-h-screen">
      {/* Left Section - Create Account */}
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white  border-gray-200 border-[3px] shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create Account</h2>
        <div className="text-[15px] text-gray-600 mb-4 ml-[55vh] -mt-[39px]">
          Already have an account?{" "}
          <Link to={"/signup"}>
          <a href="#" className="text-white hover:underline bg-neutral-500 border-none p-1 rounded-lg pr-4 pl-4 text-[14px]">
            Sign In
          </a>
          </Link>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <button className="border-gray-200 border-[2px] text-neutral-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="border-gray-200 border-[2px] text-neutral-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </button>
          <button className="border-gray-200 border-[2px] text-neutral-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
        </div>

       
  <div className="flex items-center text-gray-500 my-4">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-4">or</span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>


        <form>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">
                First name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-8 mt-2 border-red-500 border-[2px] rounded-md shadow-sm "
              />
              <p className="text-sm text-red-600 mt-1">First name is required</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">
                Last name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-8 mt-2 border-gray-200 border-[2px] rounded-md  focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full h-8 mt-2 border-gray-200 border-[2px] rounded-md  focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full h-8 mt-2 border-gray-300 border-[1px] rounded-md focus:ring-green-500 focus:border-green-500"
            />
            <p className="text-[13px] text-neutral-500 mt-1">
              Use 8 or more characters with a mix of letters, numbers, and
              symbols.Must not contain your name or username.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 text-green-500" />
              <p className="text-sm text-black">
                Send me tips, trends, freebies, updates & offers.
              </p>
              </div>
              <div>
              <p className="text-[13px] text-neutral-400 ml-7">
                You can unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="flex items-center text-gray-500 my-4 mt-9">
          <div className="flex-grow border-t border-gray-300 border-[1px]"></div>
          <div className="flex-grow border-t border-gray-300 border-[1px]"></div>
</div>
          

          <p className="text-xs text-gray-500 mt-5">
            By continuing, you confirm you are 18 or over and agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Use
            </a>
            .
          </p>
        </form>
        
        <div className="flex-grow border-t border-gray-300 border-[1px] mt-7 w-full"></div>

        <div className="mt-5 ">
            <button
              type="submit"
              className="bg-green-600 ml-[60vh] text-white py-2 px-4 text-[14px] rounded-lg  hover:bg-green-700"
            >
              Create account & continue
            </button>
          </div>
      </div>

      

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 shadow-md rounded-lg p-6 border-gray-300 border-[2px]">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>

        <div className="flex justify-between text-gray-700 mb-4 mt-3">
          <span>Travel Agency Bootstrap</span>
          <span>$29.00</span>
        </div>
        <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>

        <div className="flex justify-between text-gray-700 mb-4 mt-3">
          <span>Handling Fee</span>
          <span>$0.00</span>
        </div>
        <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>
        <hr />
        <div className="flex justify-between font-bold text-gray-800 mt-3">
          <span>Total:</span>
          <span>US$ 29.00</span>
        </div>
        <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>
        <button className="bg-blue-400 text-white py-2 px-4 rounded-lg ml-[12vh] mt-6 hover:bg-blue-600">
          Secure Checkout
        </button>
      </div>
    </div>
  );
};

export default Buynow;

// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// const Buynow = () => {
//   const [isVerified, setIsVerified] = useState(false);

//   const handleCaptchaChange = (value) => {
//     if (value) {
//       setIsVerified(true);
//     } else {
//       setIsVerified(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isVerified) {
//       alert("Please verify that you are not a robot!");
//       return;
//     }
//     // Proceed with form submission
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-white min-h-screen">
//       {/* Left Section - Create Account */}
//       <div className="w-full md:w-2/3 lg:w-1/2 bg-white border-gray-200 border-[3px] shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Other form inputs */}
//           <div className="mt-5">
//             <label className="block text-sm font-medium text-black">Password</label>
//             <input
//               type="password"
//               placeholder=""
//               className="w-full h-8 mt-2 border-gray-300 border-[1px] rounded-md focus:ring-green-500 focus:border-green-500"
//             />
//             <p className="text-[13px] text-neutral-500 mt-1">
//               Use 8 or more characters with a mix of letters, numbers, and symbols. Must not contain your name or username.
//             </p>
//           </div>

//           {/* reCAPTCHA */}
//           <div className="mt-5">
//             <ReCAPTCHA
//               sitekey="YOUR_SITE_KEY" // Replace with your Google reCAPTCHA site key
//               onChange={handleCaptchaChange}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-5">
//             <button
//               type="submit"
//               className={`bg-green-600 text-white py-2 px-4 text-[14px] rounded-lg hover:bg-green-700 ${
//                 !isVerified ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={!isVerified}
//             >
//               Create account & continue
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Right Section - Order Summary */}
//       <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 shadow-md rounded-lg p-6 border-gray-300 border-[2px]">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//         <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>

//         <div className="flex justify-between text-gray-700 mb-4 mt-3">
//           <span>Travel Agency Bootstrap</span>
//           <span>$29.00</span>
//         </div>
//         <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>
//         <hr />
//         <div className="flex justify-between font-bold text-gray-800 mt-3">
//           <span>Total:</span>
//           <span>US$ 29.00</span>
//         </div>
//         <div className="flex-grow border-t border-gray-300 border-[1px] mt-3 w-full"></div>
//         <button className="bg-blue-400 text-white py-2 px-4 rounded-lg ml-[12vh] mt-6 hover:bg-blue-600">
//           Secure Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Buynow;

