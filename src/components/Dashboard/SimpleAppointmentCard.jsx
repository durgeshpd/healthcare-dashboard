import React from "react";
import { CalendarDays } from "lucide-react";

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="flex items-center gap-3 bg-[#f6f9fe] p-3 rounded-xl border border-blue-100">
      <div className="bg-white p-2 rounded-full shadow">
        <CalendarDays className="text-blue-600 w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-[#0a2540]">{title}</h4>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
