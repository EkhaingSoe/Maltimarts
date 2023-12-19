import React from "react";
import Helmet from "../components/Helmets/Helmet";
import CommonSection from "../components/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromCart } from "../redux/Slice/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <CommonSection title="Shopping Cart" />
        <div className="container mx-auto">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-4 gap-10 my-5">
              <div className="col-span-3">
                <div className="">
                  <table className="w-full">
                    <thead>
                      <tr className="border">
                        <th className="px-2 py-2 border font-normal text-sm">
                          Image
                        </th>
                        <th className="px-2 py-2 border font-normal text-sm">
                          Title
                        </th>
                        <th className="px-2 py-2 border font-normal text-sm">
                          Price
                        </th>
                        <th className="px-2 py-2 border font-normal text-sm">
                          Quantity
                        </th>
                        <th className="px-2 py-2 border font-normal text-sm">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border">
                      {cartItems?.map((item) => (
                        <tr key={item.id} className="border">
                          <td className="px-2 py-2 border text-center">
                            <img
                              src={item.imgUrl}
                              className="w-20 h-20 mx-auto"
                              alt=""
                            />
                          </td>
                          <td className="px-2 py-2 border text-center text-sm font-medium">
                            {item.productName}
                          </td>
                          <td className="px-2 py-2 border text-center text-sm font-medium">
                            {item.price*item.quantity}
                          </td>
                          <td className="px-2 py-2 border text-center text-sm font-medium">
                            {item.quantity} px
                          </td>
                          <td
                            className="px-2 py-2 border text-center text-sm font-medium"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            <div className="flex items-center justify-center text-red-700 cursor-pointer">
                              <RiDeleteBinLine />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1">2</div>
            </div>
          ) : (
            <div className="my-20 flex items-center justify-center">
              <div>
                <h1 className=" text-primary font-semibold text-2xl mb-5">
                  There is no items to add.
                </h1>
                <div className="flex items-center justify-center">
                  <Link to="/">
                    <button className="bg-primary text-white text-sm px-5 py-1 rounded-md">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Helmet>
    </div>
  );
};

export default Cart;
