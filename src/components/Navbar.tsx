import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { ModeToggle } from './ui/mode-toggle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {FaUser} from "react-icons/fa"
import CustomPopup from './CustomPopup';
import useAuth from "../hooks/useAuth";
import { setCartState } from '@/redux/features/cartSlice';
import { updateModal } from '@/redux/features/authSlice';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const dispatch = useAppDispatch();
    const cartCount = useAppSelector(
      (state) => state.cartReducer.cartItems.length
    );
    const username = useAppSelector((state) => state.authReducer.username);

    const { requireAuth } = useAuth();
    const showCart = () => {
      requireAuth(() => dispatch(setCartState(true)));
    };
  return (
    <div className="py-4 bg-white dark:bg-gray-800 top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center list-none">
          <Link
            to="/"
            className="text-2xl font-bold dark:text-white"
            data-test="main-logo"
          >
            StoreLib
          </Link>
          <div className="flex gap-4 md:gap-8 items-center dark:text-white">
            <Link
              to="/products"
              className=" font-bold"
              data-test="main-products"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className=" font-bold"
              data-test="main-categories"
            >
              Categories
            </Link>
            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-gray-500  dark:text-white" />
              )}
              <div className="text-gray-500">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85 dark:text-white"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Login
                  </span>
                )}
              </div>
            </div>
            <div
              className="text-gray-500 text-2xl relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart className="dark:text-white" />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar


// function useAuth(): { requireAuth: any; } {
//     throw new Error('Function not implemented.');
// }
// function useAuth(): { requireAuth: any; } {
//     throw new Error('Function not implemented.');
// }
