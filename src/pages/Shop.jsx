import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmets/Helmet'
import CommonSection from '../components/CommonSection'
import {CiSearch} from "react-icons/ci"
import products from '../assets/data/products'
import ProductList from '../components/Product/ProductList'
import { useDispatch } from 'react-redux'
import { searchItem } from '../redux/Slice/cartSlice'
import { Link } from 'react-router-dom'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)
 


  // const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  //  useEffect(() => {
    // Filter products based on the category filter
  //   const filtered = filter
  //     ? productsData.filter((product) => product.category === filter)
  //      : productsData;
  //    console.log(filtered);

  //   setProductsData(filtered);
  // }, [filter,productsData,]);
  

  const filterHandler = (e) => {
    const filter = e.target.value;
    console.log(filter);
    const filteredProducts = filter ? products.filter(item => item.category === filter) : products;
    console.log(filteredProducts);
    setProductsData(filteredProducts);
  }

  

  
  const searchHandler = (e) => {
    const search = e.target.value;
    console.log(e.target.value);
    const items = products.filter(item => item.productName.toLowerCase().includes(search.toLowerCase()));
    console.log(items);
    setProductsData(items);
    // dispatch(searchItem(search))
  }
  return (
    <Helmet title="shop">
      <CommonSection title="Product" />
      <section className='shop py-10 px-5 lg:px-0'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-3'>
            <div className='col-span-1'>
              <select
                
                onChange={filterHandler}
                className='bg-primary  lg:w-[60%] rounded-md text-white text-sm px-3 py-2'>
                <option value="" className='my-2'>Filter By Category</option>
                <option value="sofa">sofa</option>
                <option value="chair">chair</option>
                <option value="mobile">mobile</option>
                <option value="wireless">wireless</option>
                <option value="watch">watch</option>
              </select>
            </div>
            <div className='col-span-1 '>
              <select
               
                className='bg-primary float-right lg:float-none lg:w-[50%] rounded-md text-white text-sm px-3 py-2' id="">
                <option >Sort By</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='flex items-center w-full mt-5 lg:mt-0 border-primary ring-1 ring-primary justify-between px-3 py-2 rounded-md   '>
              <input type="search"  onChange={searchHandler} className='outline-none    text-xs '  placeholder='Seach Items' />
              <CiSearch className='text-end'/>
            </div>
            </div>
           
          </div>
          
          </div>
      </section>
      <section className='Product'>
        <div className="container mx-auto">
          <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            
              {
              productsData.length === 0 ? "No Product is Found" :
                <ProductList data={productsData}/>
                
            }
            
            
            {/* {
              <ProductList data={productsData} />
                    }  */}
              </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Shop