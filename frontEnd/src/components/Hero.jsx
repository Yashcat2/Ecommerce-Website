import React from 'react'
import Slider from 'react-slick'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.png'
import img3 from '../assets/img3.jpg'

const Hero = () => {
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

  const carouselImages = [img1, img2, img3]

  return (
    <div className="flex items-center justify-center h-screen mt-[-60px]">
      <div className="w-screen max-w-10xl ">
        <Slider {...settings}>
          {carouselImages.map((imgSrc, idx) => (
            <div key={idx}>
              <img
                src={imgSrc}
                alt={`Hero slide ${idx + 1}`}
                className="w-full h-[550px] object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
