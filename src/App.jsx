import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/Dashboard/DashboardMainContent";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 hidden md:block bg-white border-r border-gray-200">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <Header />
        </header>
        <main className="p-4 md:p-6 overflow-y-auto h-full">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
