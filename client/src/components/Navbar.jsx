import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const user = { name: "Jhone" };
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
  };
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 text-slate-800 transition-all">
        <Link to="/">
          <img src="/logo.svg" alt="" className="h-11 w-auto" />
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">Hi, {user?.name} </p>
          <button
            onClick={logoutUser}
            className="cursor-pointer bg-white hover:bg-slate-50 border border-green-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
