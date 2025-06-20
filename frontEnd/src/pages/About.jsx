import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import b1  from '../assets/150.jpg'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[250px] h-[300px]' src={b1} alt="About Infinity Laptop Store" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>
              Welcome to <strong>Infinity Laptop Store</strong> — your ultimate destination for high-performance laptops, cutting-edge technology, and unbeatable customer service. We are passionate about helping individuals, students, professionals, and businesses find the perfect computing solutions tailored to their needs.
            </p>
            <p>
              From ultra-light notebooks for daily productivity to powerful gaming rigs, we carry the latest models from leading brands. At Infinity, we do   not just sell laptops — we deliver a seamless shopping experience backed by expert guidance and post-purchase support.
            </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
              Our mission is to empower every customer with reliable, innovative, and future-ready laptop solutions. We believe technology should enhance your lifestyle, not complicate it. That is why we handpick every product to ensure quality, performance, and value — so you can focus on what truly matters.
            </p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every laptop we offer undergoes rigorous quality checks. We only stock genuine, brand-new devices backed by manufacturer warranties. Your satisfaction and peace of mind are our top priorities.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Shop online or visit our store — the choice is yours. Our website offers easy navigation, secure checkout, and fast shipping. Need advice? Our tech experts are just a message away.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Whether you are a tech newbie or a seasoned pro, our friendly team is here to help — from choosing the right model to troubleshooting and beyond. At Infinity, we treat customers like family.
          </p>
        </div>
      </div>

      <NewsLetter />

    </div>
  )
}

export default About
