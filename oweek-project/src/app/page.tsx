import Image from "next/image";
import Countdown from "../Components/Countdown";
import Schedule from "../Components/Schedule";
import Logos from "../Components/logos";

import Pillar from "../Images/pillar.svg";
export default function Home() {
  return (
    <div className="bg-[url('https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/01/the-okhema-skyline-on-amphoreus-in-honkai-star-rail.jpg')] bg-cover bg-center ">
      <div className="overflow-x-hidden bg-slate-400/85 min-h-screen flex flex-col items-center">
          <div className="pt-5"></div>
        <Logos />
        <div className="">
          <div className="pt-5"></div>
          <Countdown />
          <div className="pt-5"></div>
          <Schedule />
        </div>
      </div>
    </div>
  );
}
