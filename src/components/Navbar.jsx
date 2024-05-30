import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { NavSearchBar } from "./NavSearchBar";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <>
      <div className="bg-[#032541] shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <NavLink to="/">
                <span className="text-3xl font-bold text-white cursor-pointer mr-8 flex justify-center w-full">
                  <img src={logo} alt="" className="md:h-5 h-4" />
                </span>
              </NavLink>
              <div className="flex items-center justify-center flex-grow">
                <NavLink
                  to="/favourites"
                  className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-2"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </NavLink>
                <NavLink
                  to="/watchlist"
                  className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-4"
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <NavLink to="/login">
                <button className="mr-4 p-2 text-white text-lg hover:text-gray-300 font-semibold">
                  Login
                </button>
              </NavLink>
              <button className="p-2">
                <FontAwesomeIcon
                  icon={isSearchActive ? faX : faMagnifyingGlass}
                  color={isSearchActive ? "white" : "#01B4E4"}
                  size="lg"
                  onClick={() => setIsSearchActive(!isSearchActive)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isSearchActive && <NavSearchBar setIsSearchActive={setIsSearchActive} />}
    </>
  );
};

export default Navbar;
