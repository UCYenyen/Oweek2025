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
    const targetDate = new Date('Augist 25, 2025 00:00:00').getTime();
    
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
      <h2 className="text-2xl font-bold mb-6">Event Countdown</h2>
      <div className="flex space-x-4 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white rounded-lg w-24 h-24 flex items-center justify-center text-4xl font-bold">
            {timeLeft.days}
          </div>
          <span className="mt-2 text-lg">Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white rounded-lg w-24 h-24 flex items-center justify-center text-4xl font-bold">
            {timeLeft.hours}
          </div>
          <span className="mt-2 text-lg">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white rounded-lg w-24 h-24 flex items-center justify-center text-4xl font-bold">
            {timeLeft.minutes}
          </div>
          <span className="mt-2 text-lg">Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white rounded-lg w-24 h-24 flex items-center justify-center text-4xl font-bold">
            {timeLeft.seconds}
          </div>
          <span className="mt-2 text-lg">Seconds</span>
        </div>
      </div>
    </div>
  );
}