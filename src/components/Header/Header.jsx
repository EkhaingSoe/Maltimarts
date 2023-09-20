import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import { BsSuitHeart } from "react-icons/bs"
import { BsHandbag } from "react-icons/bs"
import { CiMenuBurger } from "react-icons/ci"
import {motion} from "framer-motion"
import './Header.css'
import { useSelector } from 'react-redux'

const navLinks=[
    {
        path: '/',
        display:"Home"
    },
     {
        path: '/shop',
        display:"Shop"
    },
      {
        path: '/cart',
        display:"Cart"
    },
]

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyFun = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
                
            }
        })
    }

    const  data  = useSelector(state => state.cart.totalQuantity);
    console.log(data);
    

    useEffect(() => {
        stickyFun();
    },[])

    const menuToggle = () => menuRef.current.classList.toggle('active__menu');
   
  return (
      <header className='header px-4  h-[50px] lg:px-0 w-full flex items-center  bg-white ]' ref={headerRef}>
          <div className='container flex justify-between items-center mx-auto'>
              <div className='logo flex items-center gap-2'>
                  <img src={logo} className='w-6 h-6' />
                  <h1 className='font-semibold text-primary'>MultiMart</h1>
              </div>
                <div className='navigation    ' ref={menuRef} onClick={menuToggle}>
                      <ul className="menu    flex items-center gap-10     ">
                      {
                          navLinks.map((item,index) => (
                            
                          <li key={index} className='nav__item text-primary text-sm  '>
                              <NavLink className={(navClass)=>navClass.isActive? "font-semibold":""} to={item.path}>{item.display}</NavLink>
                          </li>
                        ))
                        }
                          
                      </ul>
                      
              </div>
              <div className='nav__icons   flex items-center gap-5'>
                      <span className='fav__icon relative'>
                      <BsSuitHeart className='text-primary cursor-pointer text-lg' />
                      <span className='badge  absolute w-4 h-4 -top-2 -right-2 flex items-center justify-center  bg-primary text-white rounded-full '>1</span>
                      </span>
                       <span className='cart__icon relative'>
                        <BsHandbag className='text-primary cursor-pointer text-lg' />
                      <span className='badge  absolute w-4 h-4 -top-2 -right-2 flex items-center justify-center  bg-primary text-white rounded-full '>{data}</span>
                      </span>
                      <span>
                          <motion.img whileTap={{scale:1.2}}  src={userIcon} className='w-8 h-8 cursor-pointer'  alt="" />
                  </span>
                   <div  className='mobile__menu lg:hidden ' onClick={menuToggle}>
                      <span>
                          <CiMenuBurger className='text-primary cursor-pointer'/>
                      </span>
              </div>
              </div>
             
               {/* <div className='navigation hidden sm:block  '>
                      <ul className='menu'>
                      {
                          navLinks.map((item,index) => (
                            
                          <li key={index} className='nav__item text-primary '>
                              <NavLink className={(navClass)=>navClass.isActive? "font-semibold":""} to={item.path}>{item.display}</NavLink>
                          </li>
                        ))
                        }
                          
                      </ul>
                      
              </div> */}
          </div>
    </header>
  )
}

export default Header