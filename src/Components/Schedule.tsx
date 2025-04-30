'use client';
import { useState } from "react";

// Sample schedule data - you can replace this with your actual data
const scheduleData = [
  {
    day: "DAY 0",
    title: "",
    date: "",
    location: "",
    sessions: [
      "",
      ""
    ]
  },
  {
    day: "DAY 1",
    title: "",
    date: "",
    location: "",
    sessions: [
      "",
      ""
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
    <div className="w-full">
      <div className="relative w-full max-w-4xl mx-auto bg-[#F9A817] rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="absolute top-5 bottom-0 bg-[#D86710] w-[103.5%] h-[105%] rounded-2xl left-[-1rem] "></div>
        <div className="absolute top-0 left-0 bg-[#F9A817] w-full h-full rounded-2xl "></div>
        {/* Day indicator pill */}
        <div className="flex justify-center">
        <p className="absolute -top-0 bg-white p-2 md:p-3 rounded-xl text-black font-bold text-2xl md:text-4xl transform -translate-y-1/2 shadow-lg shadow-gray-500/50">
          {schedule.day}
        </p>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center mt-6 md:mt-8">
          <h1 className="pt-4 text-white font-bold text-3xl md:text-4xl">
            {schedule.title}
          </h1>
          <h2 className="text-white text-lg md:text-xl mt-2">
            {schedule.date}
          </h2>
          <h3 className="text-white text-lg md:text-xl mt-1">
            {schedule.location}
          </h3>

          <div className="mt-6 space-y-2">
            {schedule.sessions.map((session, index) => (
              <h2 key={index} className="text-white text-center text-xl md:text-2xl">
                {session}
              </h2>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevDay}
          className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white/80 py-2 px-3 md:py-4 md:px-5 rounded-2xl text-black font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Previous day"
        >
          {"<"}
        </button>
        <button
          onClick={nextDay}
          className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white/80 py-2 px-3 md:py-4 md:px-5 rounded-2xl text-black font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Next day"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
