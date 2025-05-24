import React from "react";
import anatomyData from "../../data/anatomyData";
import humanBodyImg from "../../assets/images/human-body.png";

const AnatomySection = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 relative">
      <h2 className="text-xl font-semibold text-[#0a2540] mb-4">Health Overview</h2>
      <div className="relative w-full max-w-md mx-auto">
        <img
          src={humanBodyImg}
          alt="Human Anatomy"
          className="w-full object-contain"
        />

        {anatomyData.map((item, index) => (
          <div
            key={index}
            className="absolute text-xs font-medium px-3 py-1 rounded-full text-white"
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: item.status === "Healthy" ? "#28c76f" : "#ea5455",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnatomySection;
