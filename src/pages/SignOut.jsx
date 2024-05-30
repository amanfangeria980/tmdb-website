import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    alert("You have been signed out.");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center m-5">
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300 ease-in-out"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
