import exp from "constants";
import React from "react";

const Dashboard = ({setView}:any) => {
  return (
    <div className="m-10">
      <h2 className="text-2xl font-semibold mb-6">
        Welcome to the Admin Dashboard
      </h2>
      <div className="grid grid-rows-2 gap-6">
        <div className="bg-white p-6 shadow-lg text-center rounded-lg">
          <h3 className="text-xl font-semibold">Manage Timetables</h3>
          <p>View and manage timetables for all semesters.</p>
          <button onClick={()=>{setView('timetable')}} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Go to Timetable Management
          </button>
        </div>
        <div className="bg-white p-6 shadow-lg text-center rounded-lg">
          <h3 className="text-xl font-semibold">User Management</h3>
          <p>Manage all the users and their roles.</p>
          <button onClick={()=>{setView('user')}} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
            Go to User Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
