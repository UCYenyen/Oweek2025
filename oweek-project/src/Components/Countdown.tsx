'use client';
// Countdown.tsx

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('August 25, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-8">
        <h2 className="text-[60px] sm:text-[80px] md:text-[80px] lg:text-[100px] xl:text-[100px] font-bold mb-0 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">OWEEK 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-200/50 text-white rounded-lg w-50 h-65 flex items-center justify-center text-[90px] font-bold backdrop-blur-sm border-5 border-white">
            {timeLeft.days}
          </div>
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[40px] bg-slate-200/0 text-white rounded-lg flex items-center justify-center p-4 px-6 w-50 font-bold ">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-200/50 text-white rounded-lg w-50 h-65 flex items-center justify-center text-[90px] font-bold backdrop-blur-sm border-5 border-white">
            {timeLeft.hours}
          </div>
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[40px] bg-slate-200/0 text-white rounded-lg flex items-center justify-center p-4 px-6 w-50 font-bold">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-200/50 text-white rounded-lg w-50 h-65 flex items-center justify-center text-[90px] font-bold backdrop-blur-sm border-5 border-white">
            {timeLeft.minutes}
          </div>
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[40px] bg-slate-200/0 text-white rounded-lg flex items-center justify-center p-4 px-6 w-50 font-bold">
            Minutes
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-200/50 text-white rounded-lg w-50 h-65 flex items-center justify-center text-[90px] font-bold backdrop-blur-sm border-5 border-white">
            {timeLeft.seconds}
          </div>
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[40px] bg-slate-200/0 text-white rounded-lg flex items-center justify-center p-4 px-6 w-50 font-bold">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
}