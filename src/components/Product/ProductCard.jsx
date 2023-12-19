import React, { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/Slice/cartSlice'
import {  toast } from 'react-toastify';

const ProductCard = ({ item }) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({
            id: item.id,
            productName: item.productName,
            imgUrl: item.imgUrl,
            price:item.price
            
        }))
        toast("Product added");
    }
    
  return (
      <div  className=' hover:shadow-2xl  cursor-pointer  m-5 sm:p-0 sm:m-0'>
          <div className='p-5'>
              <div className='mb-3'>
                                  <motion.img whileHover={{scale:0.9}} src={item.imgUrl}  alt="" />
                              </div>
                              <div className='mb-2'>
                                  <h1 className='text-primary text-md font-semibold '>{item.productName}</h1>
                                  <p className='text-xs'>{item.category}</p>
                              </div>
                              <div className='flex justify-between items-center'>
                                  <h1 className='text-primary text-md font-semibold'>$ {item.price}</h1>
                                  <AiFillPlusCircle onClick={addToCart} className='text-lg'/>

                              </div>
        </div>
                              
                          </div>
  )
}

export default ProductCard