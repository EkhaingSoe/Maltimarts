import React from 'react'

import counterImg from "../assets/images/counter-timer-img.png"
import Clock from '../components/Product/Clock'


const Login = () => {
  return (
   <section className='time mt-5 bg-primary'>
              <div className='container mx-auto'>
                  <div className='grid grid-cols-1 flex items-center sm:grid-cols-2'>
                  <div className='text-white p-7 md:mt-0 text-center px-10'>
                    <div>
                        <p className='text-xs mb-2'>Limited Offers</p>
                        <h1 className='text-base mb-5'>Quality Armchair</h1>
                   </div>
                    <Clock />
                    <button className='bg-white font-semibold text-xs  text-primary px-5 py-2 rounded-md mt-5'>Visit Store</button>
                      </div>
                      <div className='hidden sm:block'>
                          <img src={counterImg} alt="" />
                      </div>
                  </div>
              </div>
          </section>
  )
}

export default Login