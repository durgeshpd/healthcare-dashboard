import React from "react";

const ActivityFeed = () => {
  const activityBars = [20, 60, 40, 80, 50, 70, 30];

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#0a2540] mb-2">Activity</h2>
      <p className="text-sm text-gray-500 mb-4">3 appointments on this week</p>

      <div className="flex items-end justify-between h-40 gap-2">
        {activityBars.map((height, index) => (
          <div
            key={index}
            className="w-full bg-blue-100 rounded-full relative"
            style={{ height: `${height}%` }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-full bg-blue-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <span key={i} className="w-full text-center">
            {day}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ActivityFeed;
