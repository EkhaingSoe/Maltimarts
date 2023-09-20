import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmets/Helmet'
import heroImg from "../assets/images/hero-img.png"
import {motion} from "framer-motion"
import Services from '../services/Services'
import products from '../assets/data/products'
import ProductList from '../components/Product/ProductList'
import counterImg from "../assets/images/counter-timer-img.png"
import Clock from '../components/Product/Clock'
import Footer from '../components/Footer/Footer'

const Home = () => {
    const year = new Date().getFullYear();
    const [TrendingProducts, setTrendingProducts] = useState([]);
    const [bestSaleProducts, setBestSaleProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    useEffect(() => {
        const filteredTrendingProducts = products.filter((item) => item.category === "chair")
        console.log(filteredTrendingProducts);
        setTrendingProducts(filteredTrendingProducts);

        const filteredBestSaleProducts = products.filter((item) => item.category === "sofa")
        console.log(filteredBestSaleProducts);
        setBestSaleProducts(filteredBestSaleProducts);

        const filteredMobileProducts = products.filter((item) => item.category === "mobile")
        console.log(filteredMobileProducts);
        setMobileProducts(filteredMobileProducts);

         const filteredWirelessProducts = products.filter((item) => item.category === "wireless")
        console.log(filteredWirelessProducts);
        setWirelessProducts(filteredWirelessProducts);
    },[])
  return (
      <Helmet title={"Home"}>
          {/* hero */}
      <section className='hero__section mb-5    bg-secondary  '>
          <div className='container  mx-auto  '>
              
              <div className='grid flex items-center   grid-cols-1 md:grid-cols-2'>
                  <div className='px-10 lg:px-0'>
                      <p className='text-xs py-5 text-primary mb-5'  >Trending product in {year}</p>
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
          <Services />
          
           <section className='TrendingProducts my-5 mx-5 md:mx-0'>
          <div className='container mx-auto'>
              <div className='grid grid-cols-1'>
                  <h1 className=' flex  justify-center text-2xl text-primary font-semibold'>Trending Products</h1>

              </div>
              <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                <ProductList data={TrendingProducts}/>
                      {/* {
                      data?.map((item, index) => <ProductCard key={index} item={item} />)
                      } */}
              </div>
          </div>
          </section>
           <section className='BestSaleProducts mb-5 mx-5 md:mx-0'>
          <div className='container mx-auto'>
              <div className='grid grid-cols-1'>
                  <h1 className=' flex  justify-center text-2xl text-primary font-semibold'>Best Sale Products</h1>

              </div>
              <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                <ProductList data={bestSaleProducts}/>
                      {/* {
                      data?.map((item, index) => <ProductCard key={index} item={item} />)
                      } */}
              </div>
          </div>
          </section>
          <section className='time mt-5 bg-primary'>
              <div className='container mx-auto'>
                  <div className='grid grid-cols-1 flex items-center sm:grid-cols-2'>
                  <div className='text-white p-7 md:mt-0 text-center px-10'>
                    <div>
                        <p className='text-xs mb-2'>Limited Offers</p>
                        <h1 className='text-base mb-5'>Quality Armchair</h1>
                   </div>
                    <Clock/>
                    <button className='bg-white font-semibold text-xs  text-primary px-5 py-2 rounded-md mt-5'>Visit Store</button>
                      </div>
                      <div className='hidden sm:block'>
                          <img src={counterImg} alt="" />
                      </div>
                  </div>
              </div>
          </section>
          <section className='new__arrival my-5'>
               <div className='container mx-auto'>
              <div className='grid grid-cols-1'>
                  <h1 className=' flex  justify-center text-2xl text-primary font-semibold'>New Arrival</h1>

              </div>
              <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                <ProductList data={mobileProducts}/>
                <ProductList data={wirelessProducts}/>
                      {/* {
                      data?.map((item, index) => <ProductCard key={index} item={item} />)
                      } */}
              </div>
          </div>
              
          </section>
         
     </Helmet>
  )
}

export default Home