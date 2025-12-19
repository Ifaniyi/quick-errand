import { NavLink } from "react-router-dom";
import { Truck } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-slate-900" />
          <span className="text-xl font-bold text-slate-900">
            QuickErrand
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
