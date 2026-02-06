import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, LogIn, Bike } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
            <Bike className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-semibold text-gray-700">
            QuickErrand
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition"
          >
            <Home size={16} />
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition"
          >
            <LayoutDashboard size={16} />
            Dashboard
          </NavLink>
        </nav>

        {/* LOGIN BUTTON */}
        <NavLink
          to="/login"
          className="flex items-center gap-2 bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition"
        >
          <LogIn size={16} />
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
