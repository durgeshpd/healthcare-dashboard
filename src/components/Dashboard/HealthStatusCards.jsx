import React from "react";
import healthCards from "../../data/healthStatusCards";

const HealthStatusCards = () => {
  return (
    <div className="grid gap-4">
      {healthCards.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-2xl shadow-sm border-l-4"
          style={{
            borderColor:
              item.status === "Healthy"
                ? "#28c76f"
                : item.status === "Caution"
                ? "#ff9f43"
                : "#ea5455",
          }}
        >
          <h3 className="text-sm font-semibold text-[#0a2540]">{item.title}</h3>
          <p className="text-xs text-gray-500">Last checked: {item.date}</p>
          <span
            className={`text-xs font-semibold inline-block mt-2 px-3 py-1 rounded-full ${
              item.status === "Healthy"
                ? "bg-green-100 text-green-700"
                : item.status === "Caution"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
