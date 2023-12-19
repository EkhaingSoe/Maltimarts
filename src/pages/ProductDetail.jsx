import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmets/Helmet";
import CommonSection from "../components/CommonSection";
import products from "../assets/data/products";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import ProductList from "../components/Product/ProductList";
import { addItem } from "../redux/Slice/cartSlice";
import {useDispatch} from "react-redux"
import {  toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products?.find((item) => item.id === id);
  console.log(product);
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[product])
  const {
    avgRating,
    category,
    description,
    imgUrl,
    price,
    productName,
    reviews,
    shortDesc
  } = product;

  const [tab, setTab] = useState("desc");
  const [starFill, setStarFill] = useState(0);
  const reviewStar = [1, 2, 3, 4, 5];
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const handleClick = (index) => {
    setStarFill(index + 1);
    console.log(starFill);
  };

  const relatedProducts = products.filter((item) => item.category === category);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(name,message);
    const reviewObj = {
      name,
      message,
      reviewStar
    };
    console.log(reviewObj);
  };

  const dispatch = useDispatch();

  const addToCart = () => {
      dispatch(addItem(product))
      toast("Product added");
  }
  return (
    <div>
      <Helmet>
        <CommonSection />
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 sm:mb-0">
              <div className="col-span-1">
                <img src={imgUrl} className="w-[70%] sm:w-[100%]" alt="" />
              </div>
              <div className="col-span-1  flex items-center mx-5 sm:mx-0 ">
                <div>
                  <h1 className="text-primary mb-4 font-semibold">
                    {productName}
                  </h1>
                  <div className="flex text-xs mb-4 items-center gap-5 ">
                    <div className="flex">
                      <span className="text-orange-500">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500">
                        <AiFillStar />
                      </span>
                    </div>

                    <span className="text-orange-500">
                      {avgRating}{" "}
                      <span className="text-paragraph">ratings</span>
                    </span>
                  </div>
                  <h1 className="text-primary mb-4 font-semibold">${price}</h1>
                  <p className="text-paragraph text-xs mb-4">{shortDesc}</p>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    onClick={addToCart}
                    className="bg-primary text-xs text-white rounded-md px-5 py-2"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-10 mx-5 sm:mx-0">
                <h1
                  className={`text-primary cursor-pointer ${
                    tab === "desc" ? "font-semibold underline " : ""
                  } `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h1>
                <h1
                  className={`text-primary cursor-pointer ${
                    tab === "rev" ? "font-semibold underline " : ""
                  }  `}
                  onClick={() => setTab("rev")}
                >
                  Review ({reviews.length})
                </h1>
              </div>
              <hr className="my-7  mx-5 sm:mx-0 " />
              <div className="mb-5">
                {tab === "desc" ? (
                  <h1 className="text-xs mx-5 sm:mx-0 text-justify text-paragraph tracking-wider leading-relaxed">
                    {description}
                  </h1>
                ) : (
                  <div className="grid grid-cols-1  mx-5 sm:mx-0 sm:grid-cols-2">
                    <div className="mb-5 sm:mb-0">
                      <h1 className="text-primary font-medium text-sm mb-2">
                        Ei Khaing Soe
                      </h1>
                      {reviews?.map((item, index) => (
                        <div key={index} className="text-xs mb-2">
                          <h1 className="text-orange-500 font-medium  mb-2 ">
                            {item.rating} <span>(Rating)</span>
                          </h1>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <form
                      action=""
                      onSubmit={SubmitHandler}
                      className="w-[100%]"
                    >
                      <h1 className="font-semibold mb-4 text-sm">
                        Leave your experience
                      </h1>
                      <div className="mb-4 ">
                        <input
                          className="text-xs px-3 py-2 outline outline-1 outline-primaryrounded-lg border-primary   w-full "
                          type="text"
                          placeholder="Enter Name"
                          name=""
                          id=""
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center mb-4 gap-3">
                        {reviewStar.map((item, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 "
                            onClick={() => handleClick(index)}
                          >
                            {index < starFill ? (
                              <AiFillStar className="text-orange-500" />
                            ) : (
                              <AiOutlineStar className="text-orange-500" />
                            )}
                          </span>
                        ))}
                      </div>
                      <div className="mb-4">
                        <textarea
                          name=""
                          id=""
                          className="w-full outline outline-1 outline-primary text-xs px-3 py-2"
                          cols="20"
                          rows="5"
                          placeholder="Review Message"
                          value={message}
                          onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <motion.button
                        whileHover={{ scale: 0.9 }}
                        type="submit"
                        className="bg-primary text-xs text-white rounded-md px-5 py-2"
                      >
                        Submit
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="mx-5 sm:mx-0 font-bold text-primary">
                You may also like
              </h1>
              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-5">
                <ProductList data={relatedProducts} />
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </div>
  );
};

export default ProductDetail;
