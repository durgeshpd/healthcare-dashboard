import React from "react";
import scheduleData from "../../data/upcomingSchedule";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#0a2540] mb-4">
        The Upcoming Schedule
      </h2>

      <div className="space-y-6">
        {scheduleData.map((daySchedule, index) => (
          <div key={index}>
            <h3 className="text-sm text-gray-500 mb-2">{daySchedule.day}</h3>
            <div className="grid gap-3">
              {daySchedule.appointments.map((appointment, i) => (
                <SimpleAppointmentCard key={i} {...appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule;
