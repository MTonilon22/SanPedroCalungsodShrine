import React from "react";
import rays from "../assets/shrine/rays.jpg";
import building from "../assets/shrine/shrinebuilding.jpg";
import s1 from "../assets/shrine/s1.jpg";
import s2 from "../assets/shrine/s2.jpg";
import shrine from "../assets/logo/shrine-logo.png";
import cebu from "../assets/logo/cebu-logo.png";
import "flowbite";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div className="">
      <div className="pb-[5%]">
        <ImageSlider />
      </div>

      <div className="flex justify-center items-center mt-[3%] mb-[3%]">
        <img src={shrine} className="h-20  mx-5" alt="Shrine Logo" />
        <img src={cebu} className="h-20 mx-5" alt="Cebu Logo" />
      </div>
      <div className="text-center font-gelasio font-bold text-[#7F1D1D] text-3xl ">
        The Cebu Archdiocesan Shrine <br />
        <span>
          of <br />
        </span>
        <span className="">Saint Pedro Calungsod</span>
      </div>
      <div className="flex mt-[100px] custom-sm:mt-5 sm:mt-10 md:mt-20">
        <div className="justify-center flex-1 max-w-[85%] py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex ">
            <div className="w-full ml-4 mr-8 mb-10 lg:w-[45%] lg:mb-0">
              <span className=" custom-sm:text-xl sm:text-2xl md:text-3.5xl lg:text-4xl font-gelasio font-bold">
                SAN PEDRO CALUNGSOD
                <span className="text-[#7F1D1D]"> SHRINE</span>
              </span>
              <h2 className="mt-5 mb-6 font-medium text-justify md:text-xl sm:text-lg custom-sm:text-sm font-gelasio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis doloremque facilis odit quod nihil ea amet! Similique,
                quia illum voluptate, architecto laboriosam veniam maiores
                animi, doloremque fugiat atque ullam laudantium!
              </h2>
              <p className="mb-10 font-normal text-justify text-md md:text-lg custom-sm:text-sm font-gelasio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, esse libero ad eos, quos id adipisci at expedita aut
                ratione atque maxime vitae magnam tempore excepturi,
                consequuntur suscipit obcaecati similique?
              </p>

              <p className="mb-10 font-normal text-justify sm:text-md md:text-lg custom-sm:text-sm font-gelasio">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores est laboriosam vel voluptatibus quasi veniam, aut
                totam id quos reprehenderit necessitatibus perspiciatis hic?
                Laudantium, ex. Magnam optio ullam debitis cum.
              </p>
            </div>
            <div className="w-full px-4 mb-10 lg:w-[45%] lg:mb-0 ml-[2%]">
              <div className="relative flex ">
                <div className="absolute hidden w-full h-full bg-[#996515] rounded -bottom-6 left-6 lg:block "></div>
                <img
                  src={rays}
                  alt="aboutimage"
                  className="relative object-cover w-100 h-100 rounded  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default Home;
