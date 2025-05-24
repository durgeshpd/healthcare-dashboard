import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="h-screen p-6 flex gap-6">
      <div className="flex flex-col flex-1 space-y-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="flex-grow overflow-hidden">
          <ActivityFeed />
        </div>
      </div>

      <div className="flex flex-col flex-1 space-y-6 h-full">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
