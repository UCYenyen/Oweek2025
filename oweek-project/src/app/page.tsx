import Image from "next/image";
import Countdown from "../Components/Countdown";
import Schedule from "../Components/Schedule";
export default function Home() {
  return (
    <div id="all-container" className="bg-slate-900 w-[100vw] h-[100vh] flex flex-col items-center">
        <Countdown />
        <br />
        <Schedule />
    </div>
  );
}
