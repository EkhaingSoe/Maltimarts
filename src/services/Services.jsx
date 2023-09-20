import React from 'react'
import {BsTruck} from "react-icons/bs"
import serviceData from '../assets/data/serviceData'
import './Services.css'

const Services = () => {
  return (
      <section className='services p-5'>
          <div className='container mx-auto'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                  {
                      serviceData.map((item, index) => (
                          <div key={index} className='flex items-center gap-3 p-4 rounded-md' style={{background : `${item.bg}`}}>
                              <div className=''>
                                  <button className=''>
                                  <BsTruck className='services-icon   '/>
                              </button>
                            </div>
                              
                              <div>
                                  <h1 className='text-primary text-md font-medium mb-1'>{item.title}</h1>
                                  <p className='text-paragraph text-xs'>{item.subtitle}</p>
                              </div>
                          </div>

                      ))
                 }
                  {/* <div>2</div>
                  <div>3</div>
                  <div>4</div> */}
              </div>
          </div>
    </section>
  )
}

export default Services