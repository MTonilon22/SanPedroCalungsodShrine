import React from "react";
// import shrine from "../assets/logo/shrine-logo.png";
// import cebu from "../assets/logo/cebu-logo.png";
const Footer = () => {
  return (
    <div className="flex w-full bg-[#7F1D1D] p1 text-white font-serif h-[180px] relative ">
      <div className="custom-sm:w-[33.33%] w-[25%] p-1 sm:w-[33.33%]">
        <div className="flex justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 custom-sm:">
          <span className="flex custom-sm:mt-2 mt-0">About Us</span>
        </div>
        <div className="w-[15%]  flex flex-row mx-auto ml-[30%] mt-[5%]">
          {/* <img src={shrine} alt="" />

          <img className="mx-5" src={cebu} alt="" /> */}
        </div>
        <div className="flex-col justify-center items-center font-normal">
          <div className="flex justify-center items-center mb-2"></div>
        </div>
      </div>
      <div className="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%] custom-sm:p-1 lg:p-0">
        <div className="flex justify-center items-center m-1 mb-5">
          <span className="custom-sm:mt-2 custom-sm:text-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg">
            Customer Service
          </span>
        </div>
        <div className="custom-sm:mt-[-9px] flex justify-center items-center flex-col text-center text-base">
          <div className="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base">
            Policy
          </div>
          <div className="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base">
            Team
          </div>
          <div className="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base">
            FAQs
          </div>
          <div className="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base">
            Terms and Conditions
          </div>
        </div>
      </div>
      <div className="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%]">
        <div className="flex justify-center items-center custom-sm:pt-3 sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 mb-5">
          <span>Contact Us</span>
        </div>
        <div>
          <div className="text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base">
            Join Us Now!
          </div>

          <div className="flex custom-sm:mt-[8%] custom-sm:ml-[15%] lg:ml-[35%] lg:mt-[5%] md:ml-[25%] md:mt-[5%] sm:ml-[25%] sm:mt-[5%] cursor-pointer">
            {/* <span className="material-icons">facebook</span>

            <span className="material-icons">facebook</span> */}
          </div>
        </div>
      </div>
      <div className="custom-sm:hidden sm:hidden md:hidden lg:block w-[25%] p-1">
        <div className="flex flex-col justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg text-white mb-5 mr-5 ml-5">
          <div>Gallery</div>
          {/* <div className="flex h-[160px] w-full hover:scale-[1.02]">
            <div className="flex items-center justify-center w-[65%] p-1">
              <img
                className="h-[151px] border-2 border-[#fefefe]"
                src="../assets/gal1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col w-[35%]">
              <div className="h-[50%] items-center justify-center p-1">
                <img
                  className="h-[70px] border-2 border-[#fefefe]"
                  src="../assets/gal2.jpg"
                  alt=""
                />
              </div>
              <div className="h-[50%] items-center justify-center p-1">
                <img
                  className="h-[71px] border-2 border-[#fefefe]"
                  src="../assets/gal3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
