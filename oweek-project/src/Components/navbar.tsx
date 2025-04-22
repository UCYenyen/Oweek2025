import Image from "next/image";

export default function navbar() {
  return (
    <div id="all-container" className="bg-[#E77A21] px-24 w-[100vw] h-[20vh] flex items-center justify-between">
        <h1 className="text-slate-50 font-bold text-4xl">OWEEK</h1>
        <ul className="flex gap-10 font-semibold text-2xl">
            <li><a href="">HOME</a></li>
            <li><a href="">SCHEDULES</a></li>
            <li><a href="">RULES</a></li>
            <li><a href="">COUNTDOWN</a></li>
        </ul>
    </div>
  );
}
