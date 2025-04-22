'use client';
// Countdown.tsx

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set the target date: April 30, 2025
    const targetDate = new Date('August 25, 2025 00:00:00').getTime();
    
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      // If the target date has passed, clear the interval
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-5xl font-bold mb-2 absolute z-2 top-14 bg-gray-500 rounded-lg flex items-center justify-center p-4 px-4">OWEEK 2025</h2>
      <div className="flex space-x-4 text-center relative z-1 top-17">
        <div className="flex flex-col items-center">
          <div className="bg-gray-600 text-white rounded-lg w-50 h-65 flex items-center justify-center text-6xl font-bold">
            {timeLeft.days}
          </div>
          <span className="mt-2 text-3xl bg-gray-600 rounded-lg flex items-center justify-center p-4 px-6 w-50 mt-4 font-bold">Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-600 text-white rounded-lg w-50 h-65 flex items-center justify-center text-6xl font-bold">
            {timeLeft.hours}
          </div>
          <span className="mt-2 text-3xl bg-gray-600 rounded-lg flex items-center justify-center p-4 px-6 w-50 mt-4 font-bold">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-600 text-white rounded-lg w-50 h-65 flex items-center justify-center text-6xl font-bold">
            {timeLeft.minutes}
          </div>
          <span className="mt-2 text-3xl bg-gray-600 rounded-lg flex items-center justify-center p-4 px-6 w-50 mt-4 font-bold">Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-600 text-white rounded-lg w-50 h-65 flex items-center justify-center text-6xl font-bold">
            {timeLeft.seconds}
          </div>
          <span className="mt-2 text-3xl bg-gray-600 rounded-lg flex items-center justify-center p-4 px-6 w-50 mt-4 font-bold">Seconds</span>
        </div>
      </div>
    </div>
  );
}