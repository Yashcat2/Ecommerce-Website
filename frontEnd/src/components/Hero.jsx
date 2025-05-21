import React from 'react'
import Slider from 'react-slick'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.png'
import img3 from '../assets/img3.jpg'

const Hero = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  // Example carousel images — replace with your own assets if needed
  const carouselImages = [
    img1,
    img2,  // assuming you have more images in your assets
    img3,
  ]

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-[#414141]" aria-hidden="true"></span>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST ARRIVAL
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <span className="w-8 md:w-11 h-[1px] bg-[#414141]" aria-hidden="true"></span>
          </div>
        </div>
      </div>

      {/* Hero right side - Carousel */}
      <div className="w-full sm:w-1/2">
        <Slider {...settings}>
          {carouselImages.map((imgSrc, idx) => (
            <div key={idx}>
              <img
                src={imgSrc}
                alt={`Hero slide ${idx + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
