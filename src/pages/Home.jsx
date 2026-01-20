import React from "react";
import { useNavigate } from "react-router-dom";
import img from "/homeIMG.png";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-6 md:px-16 lg:px-40">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-10 flex flex-col justify-center text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Find the right <span className="bg-amber-200">freelancer</span> for
            your work.
          </h1>
          <p className="text-lg md:text-xl py-4 md:py-6">
            Choose from 29,325 independent freelancers available for work.
          </p>
          <h2 className="text-2xl md:text-3xl">
            Hire a professional <span className="font-bold">NOW!</span>
          </h2>
          <button
            onClick={() => navigate("/explore")}
            className="bg-yellow-400 px-5 py-3 rounded-xl font-bold mt-4 hover:bg-yellow-500 transition cursor-pointer"
          >
            Explore
          </button>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-0">
          {/* Floating Card */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 lg:static lg:translate-x-36 lg:translate-y-30 lg:-ml-40 bg-white shadow-xl p-5 rounded-xl w-64 text-center">
            <h1 className="text-2xl font-bold">Alina Snow</h1>
            <h1 className="text-gray-600">Software Developer</h1>
          </div>

          {/* Profile Image */}
          <img
            className="rounded-full object-cover w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-16 lg:mt-0"
            src="https://imgs.search.brave.com/zM3sk4FbAC5qQkaDYLaK_QG3eokUs5gQLETVbrKb9v8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/OTQwMzE4MC9waG90/by9sYXVnaGluZy15/b3Vnbi1idXNpbmVz/c3dvbWFuLXN0YW5k/aW5nLXdpdGgtaGVy/LWFybXMtY3Jvc3Nl/ZC1hZ2FpbnN0LWFu/LW9mZmljZS13YWxs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rbjZUTTV5LTI2/b2hrdW9BVTlGaVdu/NHBZb3lWUFM3eGZX/TFZ5QkdqX1RBPQ"
            alt="Profile"
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-[#373737] py-10 flex flex-wrap justify-evenly items-center gap-6 md:gap-10">
        <img
          className="h-12 md:h-16 lg:h-20"
          src="https://imgs.search.brave.com/49kIE-sKnZSuWhcE1snsmfjtk0JAL3bhGKYYsSZx1LA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9uZXctUGF5/UGFsLWxvZ28td2hp/dGUtcG5nLWhvcml6/b250YWwtbGFyZ2Ut/c2l6ZS5wbmc"
          alt="PayPal"
        />
        <img
          className="h-12 md:h-16 lg:h-20"
          src="https://cdn-icons-png.flaticon.com/128/5968/5968919.png"
          alt="Google"
        />
        <img
          className="h-12 md:h-16 lg:h-20"
          src="https://cdn-icons-png.flaticon.com/128/5968/5968929.png"
          alt="Microsoft"
        />
        <img
          className="h-12 md:h-16 lg:h-20"
          src="https://cdn-icons-png.flaticon.com/128/4817/4817607.png"
          alt="Amazon"
        />
      </div>

      <div className="min-h-screen w-full flex flex-col px-4 md:px-10">
        {/* TOP SECTION */}
        <div className="w-full flex items-center justify-center mb-16 py-16">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl 
                   w-full md:w-4/5 lg:w-3/5 
                   font-bold text-center leading-tight"
          >
            Save time start your Business with our freelancers
          </h1>
        </div>

        {/* CARDS SECTION */}
        <div
          className="w-full flex flex-col md:flex-row 
                  items-center justify-center 
                  gap-8 md:gap-12 lg:gap-20 pb-16"
        >
          {/* CARD 1 */}
          <div className="bg-[#9BD3D0] w-full sm:w-96 h-auto rounded-2xl p-10">
            <img
              className="rounded-full p-3 mb-6 bg-white h-16 w-16"
              src="https://img.icons8.com/?size=100&id=sXm12ie1GUjg&format=png&color=000000"
              alt=""
            />
            <h1 className="text-xl md:text-2xl my-2 font-bold">Developer</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#FECBB8] w-full sm:w-96 h-auto rounded-2xl p-10">
            <img
              className="rounded-full p-3 mb-6 bg-white h-16 w-16"
              src="https://img.icons8.com/?size=100&id=48855&format=png&color=000000"
              alt=""
            />
            <h1 className="text-xl md:text-2xl my-2 font-bold">Plumber</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#FFC348] w-full sm:w-96 h-auto rounded-2xl p-10">
            <img
              className="rounded-full p-3 mb-6 bg-white h-16 w-16"
              src="https://img.icons8.com/?size=100&id=68665&format=png&color=000000"
              alt=""
            />
            <h1 className="text-xl md:text-2xl my-2 font-bold">Tutor</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full flex bg-[#F6BB3B]">
        <div className=" h-full w-1/2  justify-center hidden sm:block">
          <img className="h-full w-full object-cover" src={`${img}`} alt="" />
        </div>
        <div className="px-5">
          <h1 className="text-6xl font-bold text-white pb-7 pt-10">Why us?</h1>
          <div className="my-10">
            <div className="flex my-4">
              <div className="text-5xl font-bold my-">5+</div>
              <div className="mx-4">
                <div className="font-bold text-xl">Years of</div>
                <div className="font-bold text-xl">Experience</div>
              </div>
            </div>
            <div className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ipsam unde voluptatem? Eveniet incidunt earum eos veritatis error?
            </div>
          </div>
          <div className="my-10">
            <div className="flex my-4">
              <div className="text-5xl font-bold my-">7K+</div>
              <div className="mx-4">
                <div className="font-bold text-xl">Happy</div>
                <div className="font-bold text-xl">Users</div>
              </div>
            </div>
            <div className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ipsam unde voluptatem? Eveniet incidunt earum eos veritatis error?
            </div>
          </div>
          <div className="my-10">
            <div className="flex my-4">
              <div className="text-5xl font-bold my-">3K+</div>
              <div className="mx-4">
                <div className="font-bold text-xl">Professional</div>
                <div className="font-bold text-xl">Freelancers</div>
              </div>
            </div>
            <div className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ipsam unde voluptatem? Eveniet incidunt earum eos veritatis error?
            </div>
          </div>
        </div>
      </div>

     <div className="w-full bg-[#86BAB5] px-4 py-10">

  {/* Heading */}
  <div className="flex justify-center items-center mb-8">
    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl text-center">
      What our users say
    </h1>
  </div>

  {/* Content */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center">
    
    {/* Image */}
    <div className="h-72 w-60 sm:h-80 sm:w-72 rounded-lg overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg"
        alt="User"
      />
    </div>

    {/* Text */}
    <h4 className="max-w-xl font-bold text-xl sm:text-2xl md:text-4xl text-center md:text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Autem nulla similique unde odio deserunt non culpa.
    </h4>

  </div>
</div>

    </>
  );
}

export default Home;
