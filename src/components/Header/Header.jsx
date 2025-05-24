import React from "react";
import { Bell, Plus } from "lucide-react";
import userAvatar from "../../assets/images/avatar-placeholder.png";

const Header = () => {
  return (
    <header className="w-full bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-[#0a2540]">
          Health<span className="text-[#43a1f9]">care.</span>
        </h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none w-64"
            disabled
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
            🔍
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-2">
          <img
            src={userAvatar}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Dr. Jane</span>
        </div>

        <button className="p-2 rounded-full bg-[#43a1f9] text-white hover:bg-blue-500 transition">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
