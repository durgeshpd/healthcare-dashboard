import React from "react";
import calendarData from "../../data/calendarData";

const CalendarView = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#0a2540] mb-4">Calendar</h2>

      <div className="text-sm text-gray-600 mb-2">October 2021</div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}

        {calendarData.days.map((day, index) => (
          <div
            key={index}
            className={`rounded-lg h-16 flex flex-col justify-start items-center p-1 ${
              day.appointments.length
                ? "bg-blue-50 border border-blue-300"
                : "bg-gray-100"
            }`}
          >
            <div className="text-sm font-semibold">{day.date}</div>
            {day.appointments.map((time, i) => (
              <span
                key={i}
                className="mt-1 text-[10px] px-2 py-0.5 bg-blue-600 text-white rounded-full"
              >
                {time}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {calendarData.cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#edf4ff] p-4 rounded-xl border border-blue-200"
          >
            <h3 className="text-sm font-semibold text-[#0a2540]">
              {card.title}
            </h3>
            <p className="text-xs text-gray-500">{card.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;
