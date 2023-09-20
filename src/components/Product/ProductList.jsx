import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'


const ProductList = ({data}) => {
  return (
    
      <>
          {
        data?.map((item, index) =>
          <Link to={`/detail/${item.id}`}>
            <ProductCard key={index} item={item} />
          </Link>
        )
                      }
      </>
                      
   
  )
}

export default ProductList