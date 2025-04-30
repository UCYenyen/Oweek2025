import Image from "next/image";
import Countdown from "../Components/Countdown";
import Schedule from "../Components/Schedule";
import Logos from "../Components/logos";
import MapLocation from '../Components/MapLocation';
import AssetOne from "../Images/Asset 1.svg";
import AssetFour from "../Images/Asset 4.svg"

import Pillar from "../Images/pillar.svg";
export default function Home() {
  return (
    <div className="  ">
      <div className="overflow-x-hidden bg-[#9d9zd9d] min-h-screen flex flex-col items-center">
        <div className="pt-10"></div>
        <Logos />
          <div className="">
            <div className="pt-10"></div>
            <Countdown />
            <div className="pt-10"></div>
            {/* original gradient color : bg-gradient-to-b from-[#f9a817] via-[#e77a21] to-[#d76b12] */}
            <div className="relative bg-[#e77a21] w-screen p-20">
              <Image className="absolute top-0 right-0" width={500} src={AssetOne} alt="Description of Asset One" draggable='false'/>
              <Image className="absolute bottom-0 left-0" width={200} src={AssetFour} alt="Description of Asset One" draggable='false'/>
              <Schedule />
              <div className="pt-5"></div>
              <MapLocation />
            </div>
          </div>
      </div>
    </div>
  );
}
