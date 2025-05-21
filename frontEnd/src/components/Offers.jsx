import React from 'react';

const Offers = () => {
  return (
    <div
      className="
        w-[90%] h-[60vh] flex mx-auto px-6 lg:px-12 xl:px-[140px] mb-[100px]
        bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
        sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] mt-10
      "
    >
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
          Exclusive
        </h1>
        <h1 className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
          Offers For You
        </h1>
        <p className="text-[#171717] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button
          className="
            mt-6 text-white bg-[#ff4141] font-medium
            rounded-full
            w-[160px] h-[40px] text-sm
            sm:w-[180px] sm:h-[45px] sm:text-base
            md:w-[200px] md:h-[50px] md:text-lg
            lg:w-[240px] lg:h-[60px] lg:text-xl
            xl:w-[282px] xl:h-[70px] xl:text-2xl
          "
        >
          Check Now
        </button>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center lg:mr-[-300px] sm:mr-0 md:mr-0">
        <img
          src="/offer2.jpg"
          alt="Exclusive Offer"
          className="
            h-[150px] w-auto
            sm:h-[200px]
            md:h-[250px]
            lg:h-[300px]
            xl:h-[440px]
          "
        />
      </div>
    </div>
  );
};

export default Offers;
