import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { NavSearchBar } from "./NavSearchBar";
import { useCredentials } from "../context/UserContext";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { user, isLoggedIn } = useCredentials();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (!isLoggedIn) {
      alert("Please login to access this page.");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <div className="bg-[#032541] h-[10vh] md:h-[8vh] flex items-center shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <span className="text-3xl font-bold text-white cursor-pointer mr-8 flex justify-center w-full">
                  <img src={logo} alt="" className="md:h-5 h-4" />
                </span>
              </Link>
              <div className="flex items-center justify-center flex-grow">
                <button
                  onClick={() => handleNavigation("/favourites")}
                  className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-2"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  onClick={() => handleNavigation("/watchlist")}
                  className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-4"
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              {isLoggedIn && user ? (
                <Link to="/profile">
                  <span className="mr-4 text-white text-lg font-semibold">
                    {user}
                  </span>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="mr-4 p-2 text-white text-lg hover:text-gray-300 font-semibold">
                    Login
                  </button>
                </Link>
              )}
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
