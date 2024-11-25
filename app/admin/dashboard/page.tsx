"use client"
import Dashboard from "@/components/admin/dashboard";
import Sidebar from "@/components/admin/sidevar";
import React, { use, useState } from "react";
import UserManagement from "../user/page";
import Profile from "@/components/admin/profile";
import TimetableList from "@/components/admin/timetable";

const AdminDashboard: React.FC = () => {
    const [view,setView] = useState<any>('dashboard');
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <Sidebar setView={setView} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl font-bold m-10">
            Smart Timetable
        </h1>
        {view === 'dashboard' && (
            <Dashboard setView={setView}/>
        )}
        {view === 'user' && (
            <UserManagement />
        )}
        {view === 'timetable' && (
            <TimetableList />
        )}
        {view === 'profile' && (
            <Profile />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
