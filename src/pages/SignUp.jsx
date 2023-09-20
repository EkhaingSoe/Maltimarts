import React from 'react'
import heroImg from "../assets/images/hero-img.png"
import {motion} from "framer-motion"

const SignUp = () => {
    const year = new Date().getFullYear();
  return (
    // <Helmet title={"Home"}>
      <section className='hero__section p-6 sm:p-2 bg-secondary  '>
          <div className='container  mx-auto'>
              
              <div className='grid flex items-center   grid-cols-1 md:grid-cols-2'>
                  <div className=''>
                      <p className='text-xs text-primary mb-5'  >Trending product in {year}</p>
                      <h2 className='text-3xl font-semibold mb-5'>
                          Make your interior more Minimalistic & Modern
                      </h2>
                      <p className='text-xs tracking-wider mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi labore ullam quos. Animi dicta sint aliquid ipsa minima, eum quaerat aspernatur optio molestias modi ab quis neque illum, ipsum velit?</p>
                      <motion.button whileTap={{scale:.9}} className='bg-primary px-5 py-1 rounded-md cursor-pointer text-white text-sm'>Shop Now</motion.button>
                  </div>
                  <div>
                      <img src={heroImg} alt="" />
                  </div>
              </div>
              
          </div>
    </section>
    // </Helmet>
  )
}

export default SignUp