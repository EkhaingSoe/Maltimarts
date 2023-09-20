import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoLocation } from "react-icons/go"
import {BsTelephoneForward} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Footer = () => {
  return (
    <section className='footer  bg-primary text-white p-6'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-6'>
          <div className='col-span-2 mb-5 lg:mb-0 lg:col-span-2'>
            <h1 className='font-semibold mb-3 text-sm'>Multimart</h1>
            <p className='text-xs tracking-widest font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit ipsum commodi ducimus quam  </p>
          </div>
          <div className='col-span-1 mb-5 lg:mb-0 lg:col-span-1'>
            <h1 className='font-semibold text-sm mb-3'>Top Categories</h1>
            <ul className='text-xs tracking-widest font-thin'>
              <li className='mb-2'>
                Mobile Phones
              </li>
               <li className='mb-2'>
                Modern Sofa
              </li>
               <li className='mb-2'>
                Arm Chair
              </li>
               <li className='mb-2'>
                Smart Watches
              </li>
            </ul>
          </div>
          <div className='col-span-1 mb-5 lg:mb-0 lg:col-span-1'>
            <h1 className='font-semibold text-sm mb-3'>Useful Links</h1>
            <ul className='text-xs tracking-widest font-thin'>
              <li className="mb-2">
                <NavLink to={'/shop/:id'}>
                  Shop 
                </NavLink>
              </li>
               <li className="mb-2">
                <NavLink to={'/cart'}>
                  Cart
                </NavLink>
              </li>
               <li className="mb-2">
                <NavLink to={'/login'}>
                  Login 
                </NavLink>
              </li>
               <li className="mb-2">
                <NavLink to={'/policy'}>
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-span-2 mb-5 lg:mb-0 lg:col-span-2'>
            <h1 className='font-semibold text-sm mb-3'>Contact</h1>
            <div className='flex items-center gap-3 mb-2'>
              <GoLocation />
              <p className='text-xs tracking-widest font-thin' >No.30, 7 th Street, Hleden, Kamaryut Township</p>

            </div >
            <div className='flex items-center gap-3 mb-2'>
              <BsTelephoneForward />
              <p className='text-xs tracking-widest font-thin' >+95 9456639939</p>
              
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <AiOutlineMail />
              <p className='text-xs tracking-widest font-thin'>eikhaingsoe.ycc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer