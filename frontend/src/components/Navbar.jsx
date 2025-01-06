import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Navbar container with full-width */}
      <div className="flex items-center justify-between py-5 px-10 w-full max-w-screen-xl mx-auto">
        {/* Left: Logo */}
        <Link to="/" className="flex-grow">
          <img src={assets.logo} className="w-60" alt="Ecommerce Logo" />
        </Link>

        {/* Center: Navbar Links */}
        <ul className="hidden sm:flex gap-8 text-md text-gray-800 tracking-wide flex-grow justify-center">
          <NavLink to="/" className="flex flex-col items-center hover:text-black transition duration-300">
            <p>HOME</p>
            <hr className="w-full h-[2px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/collection" className="flex flex-col items-center hover:text-black transition duration-300">
            <p>COLLECTION</p>
            <hr className="w-full h-[2px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center hover:text-black transition duration-300">
            <p>ABOUT</p>
            <hr className="w-full h-[2px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center hover:text-black transition duration-300">
            <p>CONTACT</p>
            <hr className="w-full h-[2px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* Right: Icons (Search, Profile, Cart) */}
        <div className="flex items-center gap-6">
          {/* Search icon */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:opacity-80 transition duration-300"
          />

          {/* Profile icon */}
          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              className="w-6 cursor-pointer hover:opacity-80 transition duration-300"
              alt="Profile"
            />
            {token && (
              <div className="group-hover:block hidden absolute right-0 top-12 bg-white shadow-md rounded-md">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p onClick={logout} className="cursor-pointer hover:text-black">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart icon */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-6 min-w-5 hover:opacity-80 transition duration-300" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile menu icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-6 cursor-pointer sm:hidden hover:opacity-80 transition duration-300"
            alt="Menu"
          />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

