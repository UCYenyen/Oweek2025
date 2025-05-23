'use client';
import { useState } from "react";

// Sample schedule data - you can replace this with your actual data
const scheduleData = [
  {
    day: "PRA-OWEEK",
    title: "PRA-OWEEK",
    date: "16 Agustus 2025",
    location: "Zoom Meeting",
    sessions: [
      "Kloter 1 (7:15 - 10:00)",
      "Kloter 2 (10:45 - 13:00)"
    ],
    baju: "",
    celana: "",
    sepatu: "",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "INDEPENDENCE DAY CEREMONY",
    date: "17 Agustus 2025",
    location: "UC Plaza",
    sessions: [
      "Flag Ceremony (6:30 - 18:00)",
      "5 Seminars"
    ],
    baju: "Kemeja Putih",
    celana: "Celana Hitam Formal",
    sepatu: "Sepatu Hitam",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "MATRIKULASI JURUSAN",
    date: "19-21 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      "Jadwal mengikuti Program Studi masing masing"
    ],
    baju: "",
    celana: "",
    sepatu: "",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "PARENTS GATHERING",
    date: "22 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      " "
    ],
    baju: "",
    celana: "",
    sepatu: "",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 1",
    date: "25 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      "Opening",
      "Talkshow",
      "Ormawa Fest (7:00 - 16:30)"
    ],
    //ini untuk dressocde (mulai d-day oweek)
    baju: "Baju: Kemeja Putih",
    celana: "Celana: Celana Hitam ",
    sepatu: "Sepatu: Sepatu Sneakers",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 2",
    date: "26 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      "Pra-LDK (7:00 - 17:00)"
    ],
    baju: "Baju: Baju Batik Sopan",
    celana: "Celana: Celana Panjang Bebas",
    sepatu: "Sepatu: Sepatu Sneakers",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 3",
    date: "27 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      "Prodi Day (7:00 - 16:30)"
    ],
    baju: "Sesuai dengan ketentuan masing masing prodi",
    celana: "",
    sepatu: "",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 4",
    date: "28 Agustus 2025",
    location: "Universitas Ciputra Surabaya",
    sessions: [
      "Student Development Program (7:00 - 11:30)"
    ],
    baju: "Baju: Kemeja / Blouse Berkerah",
    celana: "Celana: Celana Panjang Bebas",
    sepatu: "Sepatu: Sepatu Bebas",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 5",
    date: "29 Agustus 2025",
    location: "Ciputra World Mall Surabaya",
    sessions: [
      "Selling Day (8:30 - 20:00)"
    ],
    baju: "Baju: Kaos Universitas Ciputra Surabaya",
    celana: "Celana: Celana Panjang",
    sepatu: "Sepatu: Sepatu Bebas",
    extra: "",
    baju2: "",
    celana2: "",
    sepatu2: ""
  },
  {
    day: "OWEEK 2025",
    title: "DAY 6",
    date: "30 Agustus 2025",
    location: "Ciputra World Mall Surabaya",
    sessions: [
      "Closing Day (13:00 - 22:00)"
    ],
    baju: "Baju: Kemeja Putih",
    celana: "Celana: Celana Panjang Hitam",
    sepatu: "Sepatu: Celana Bebas",
    extra: "Setiap Trainee harus membawa Almameter",
    baju2: "Baju: Kemeja Putih",
    celana2: "Celana: Rok / Celana Hitam Panjang Dibawah Lutut",
    sepatu2: "Sepatu: Sepatu Bebas"
  }
];

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(0);
  const [isDressCodePopupOpen, setIsDressCodePopupOpen] = useState(false);

  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % scheduleData.length);
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev - 1 + scheduleData.length) % scheduleData.length);
  };

  const openDressCode = () => {
    setIsDressCodePopupOpen(true);
  };
  const closeDressCodePopup = () => {
    setIsDressCodePopupOpen(false);
  };


  const schedule = scheduleData[currentDay];

  return (
    <div className="w-full py-12">
      <div className="relative w-full max-w-4xl mx-auto bg-[#F9A817] rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="absolute top-5 -left-4 bg-[#D86710] w-[103.5%] h-[105%] rounded-2xl z-0"></div>
        <div className="absolute top-0 left-0 bg-[#F9A817] w-full h-full rounded-2xl z-10"></div>
        
        {/* Day indicator pill */}
        <div className="flex justify-center relative z-20">
          <p className="absolute text-center -top-5 bg-white p-2 md:p-3 rounded-xl text-black font-bold text-xl sm:text-2xl md:text-4xl transform -translate-y-1/2 shadow-lg">
            {schedule.day}
          </p>
        </div>
        
        {/* Content */}
        <div className="flex flex-col items-center mt-8 pb-10 md:mt-10 relative z-20">
          <h1 className="pt-4 text-center text-white font-bold text-xl sm:text-2xl md:text-4xl">
            {schedule.title}
          </h1>
          <h2 className="text-white text-lg md:text-xl mt-2">
            {schedule.date}
          </h2>
          <h3 className="text-white text-lg md:text-xl mt-1">
            {schedule.location}
          </h3>
          
          <div className="mt-6 w-full max-w-md">
            {schedule.sessions.length > 0 ? (
              schedule.sessions.map((session, index) => (
                <div 
                  key={index} 
                  className="bg-white/0 backdrop-blur-sm p-1 rounded-lg text-white text-center text-lg md:text-xl"
                >
                  {session}  
                </div>
              ))
            ) : (
              <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg text-white text-center text-lg md:text-xl">
                {/* No sessions scheduled for this day */}
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={prevDay}
          className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white/80 py-2 px-3 md:py-4 md:px-5 rounded-2xl text-black font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 z-20"
          aria-label="Previous day"
        >
          {"<"}
        </button>
        <button
          onClick={nextDay}
          className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white/80 py-2 px-3 md:py-4 md:px-5 rounded-2xl text-black font-bold text-2xl md:text-4xl shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 z-20"
          aria-label="Next day"
        >
          {">"}
        </button>

        <button
          onClick={prevDay}
          className="absolute bottom-4 left-4 bg-white/80 py-2 px-4 rounded-lg text-black font-semibold shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 z-20"
          aria-label="Previous day"
        >
          Button 1
        </button>
        <button
          onClick={openDressCode}
          className="absolute bottom-4 right-4 bg-white/80 py-2 px-4 rounded-lg text-black font-semibold shadow-md hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 z-20"
          aria-label="Next day"
        >
          Dresscode
        </button>
      </div>
        {isDressCodePopupOpen && (
          <div className="fixed inset-0 bg-[#F9A817]/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full mx-auto mt-20 relative">
              <button 
                onClick={closeDressCodePopup} 
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold" 
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{schedule.title}</h2>
              <p className="text-gray-700 text-center">{schedule.baju}</p>
              <p className="text-gray-700 text-center">{schedule.celana}</p>
              <p className="text-gray-700 text-center">{schedule.sepatu}</p>
              <p className="text-gray-700 text-center">{schedule.extra}</p>
              <p className="text-gray-700 text-center">{schedule.baju2}</p>
              <p className="text-gray-700 text-center">{schedule.celana2}</p>
              <p className="text-gray-700 text-center">{schedule.sepatu2}</p>
            </div>
          </div>
        )}
    </div>
  );

}
