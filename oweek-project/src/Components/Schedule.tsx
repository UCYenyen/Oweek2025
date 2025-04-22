'use client';
import Image from "next/image";
import { useState } from "react";

// Sample schedule data - you can replace this with your actual data
const scheduleData = [
  {
    day: "DAY 0",
    title: "PRA OWEEK",
    date: "16 AUGUST 2024",
    location: "online (zoom)",
    sessions: [
      "Kloter 1 : 07:15 AM - 09.45 AM",
      "Kloter 2 : 10:40 AM - 01.00 PM"
    ]
  },
  {
    day: "DAY 1",
    title: "INTRODUCTION DAY",
    date: "19 AUGUST 2024",
    location: "UC Campus",
    sessions: [
      "Session 1 : 08:00 AM - 10.30 AM",
      "Session 2 : 11:00 AM - 01.30 PM"
    ]
  },
  // Add more days as needed
];

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(0);
  
  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % scheduleData.length);
  };
  
  const prevDay = () => {
    setCurrentDay((prev) => (prev - 1 + scheduleData.length) % scheduleData.length);
  };
  
  const schedule = scheduleData[currentDay];
  
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-10">
      <div className="relative w-full max-w-4xl mx-auto bg-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
        {/* Day indicator pill */}
        <div className="flex justify-center">
          <p className="absolute -top-0 bg-slate-50 p-2 md:p-3 rounded-xl text-slate-900 font-bold text-2xl md:text-4xl transform -translate-y-1/2">
            {schedule.day}
          </p>
        </div>
        
        {/* Content */}
        <div className="mt-6 md:mt-8">
          <h1 className="pt-4 text-slate-900 font-bold text-3xl md:text-4xl text-center">
            {schedule.title}
          </h1>
          <h2 className="text-slate-900 text-center text-lg md:text-xl mt-2">
            {schedule.date}
          </h2>
          <h3 className="text-slate-900 text-center text-lg md:text-xl mt-1">
            {schedule.location}
          </h3>
          
          <div className="mt-6 space-y-2">
            {schedule.sessions.map((session, index) => (
              <h2 key={index} className="text-slate-900 text-center text-xl md:text-2xl">
                {session}
              </h2>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a className="bg-slate-800 text-white px-4 py-3 md:p-5 rounded-xl cursor-pointer hover:bg-slate-700 transition-colors text-sm md:text-base">
              PENUGASAN
            </a>
            <a className="bg-slate-800 text-white px-4 py-3 md:p-5 rounded-xl cursor-pointer hover:bg-slate-700 transition-colors text-sm md:text-base">
              KETENTUAN
            </a>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevDay}
          className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-slate-50 py-2 px-3 md:py-4 md:px-5 rounded-full text-slate-900 font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Previous day"
        >
          {"<"}
        </button>
        <button 
          onClick={nextDay}
          className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-slate-50 py-2 px-3 md:py-4 md:px-5 rounded-full text-slate-900 font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Next day"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
