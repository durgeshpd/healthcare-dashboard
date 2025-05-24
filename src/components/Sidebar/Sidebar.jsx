import React from "react";
import navigationLinks from "../../data/navigation";
import * as LucideIcons from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[220px] bg-white border-r border-gray-200 h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-[#0a2540] mb-10">
        Health<span className="text-[#43a1f9]">care.</span>
      </h2>

      <div>
        <p className="text-xs uppercase text-gray-500 mb-2">General</p>
        <ul className="space-y-2">
          {navigationLinks.map(({ label, icon }, idx) => {
            const Icon = LucideIcons[icon] || LucideIcons.Circle; 

            return (
              <li
                key={idx}
                className="flex items-center px-3 py-2 rounded-lg text-gray-700 text-sm hover:bg-gray-100 transition cursor-pointer"
              >
                <Icon className="w-5 h-5 text-[#43a1f9] mr-3" />
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
