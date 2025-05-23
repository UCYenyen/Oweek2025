'use client';

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
        <h2 className="text-[40px] text-center sm:text-[80px] md:text-[80px] lg:text-[100px] xl:text-[100px] font-bold mb-0 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">OWEEK 2025</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-5 text-center">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-200/30 text-white rounded-lg p-3 flex items-center justify-center font-bold backdrop-blur-[4px] border-white w-full">
                <h1 className='text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px]'>
                  {timeLeft.days.toString().padStart(2, '0')}
                </h1>
              </div>
              <h1 className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[30px] text-white rounded-lg flex items-center justify-center font-bold ">
                Days
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-slate-200/30 text-white rounded-lg p-3 flex items-center justify-center font-bold backdrop-blur-[4px] border-white w-full">
                <h1 className='text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px]'>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </h1>
              </div>
              <h1 className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[30px] text-white rounded-lg flex items-center justify-center font-bold ">
                Hours
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-slate-200/30 text-white rounded-lg p-3 flex items-center justify-center font-bold backdrop-blur-[4px] border-white w-full">
                <h1 className='text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px]'>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </h1>
              </div>
              <h1 className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[30px] text-white rounded-lg flex items-center justify-center font-bold ">
                Minues
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-slate-200/30 text-white rounded-lg p-3 flex items-center justify-center font-bold backdrop-blur-[4px] border-white w-full">
                <h1 className='text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px]'>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </h1>
              </div>
              <h1 className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-[30px] text-white rounded-lg flex items-center justify-center font-bold ">
                Seconds
              </h1>
            </div>
      </div>
    </div>
  );
}