import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <header>
        <div className="p-5 flex justify-between items-center bg-white">
          <Link className="text-xl font-bold cursor-pointer" to="/">
            Quizzy
          </Link>
          <div>
            <NavLink
              to="/topics"
              className={({ isActive }) =>
                isActive
                  ? "text-md mx-2 font-semibold bg-purple-300 p-2"
                  : "text-md mx-2 font-semibold"
              }
            >
              Topics
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? "text-md mx-2 font-semibold bg-purple-300 p-2"
                  : "text-md mx-2 font-semibold"
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-md mx-2 font-semibold bg-purple-300 p-2"
                  : "text-md mx-2 font-semibold"
              }
            >
              Blog
            </NavLink>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeScreen;
