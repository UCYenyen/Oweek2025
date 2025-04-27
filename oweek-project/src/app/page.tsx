import Image from "next/image";
import Countdown from "../Components/Countdown";
import Schedule from "../Components/Schedule";
import Logos from "../Components/logos";
import MapLocation from '../Components/MapLocation';

import Pillar from "../Images/pillar.svg";
export default function Home() {
  return (
    <div className="  ">
      <div className="overflow-x-hidden bg-gradient-to-b from-[#f9a817] via-[#e77a21] to-[#d76b12] p- min-h-screen flex flex-col items-center">
        <div className="pt-5"></div>
        <Logos />
          <div className="bg-orange-200/0 p-5 rounded-lg">
            <div className="pt-5"></div>
            <Countdown />
            <div className="pt-5"></div>
            <Schedule />
            <div className="pt-5"></div>
            <MapLocation />
          </div>
      </div>
    </div>
  );
}
