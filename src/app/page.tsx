import { Metadata } from 'next';

import Image from "next/image";
import Countdown from "../Components/Countdown";
import Schedule from "../Components/Schedule";
import Logos from "../Components/logos";
import MapLocation from '../Components/MapLocation';
import AssetOne from "../Images/Asset 1.svg";
import AssetFour from "../Images/Asset 4.svg"
import backgroundOweek from "./../Images/oweek_background.png";

import DisableZoom from "./../Scripts/DisableZoom";

export const metadata: Metadata = {
  title: 'Oweek 2025',
  description:
    'Universitas Ciputra Surabaya',
};
export default function Home() {
  return (
    <div className="" >
       <DisableZoom />
      <div className="overflow-x-hidden min-h-screen flex flex-col items-center">
        <div className="bg-no-repeat bg-cover bg-position-[center_bottom_25rem]" style={{ backgroundImage: `linear-gradient(rgba(249, 168, 23, 0.3), rgba(241, 122, 33, 0.5)), url(${backgroundOweek.src}`}}>
            <div className="pt-10"></div>
            <Logos />
              <div className="">
              <div className="pt-10"></div>
              <Countdown />
          </div>
            <div className="pt-10"></div>
            {/* original gradient color : bg-gradient-to-b from-[#f9a817] via-[#e77a21] to-[#d76b12] */}
            <div className="relative bg-[#e77a21] w-screen p-20">
              <Image className="absolute top-0 right-0" width={500} src={AssetOne} alt="Description of Asset One" draggable='false'/>
              <Image className="absolute bottom-0 left-0" width={200} src={AssetFour} alt="Description of Asset One" draggable='false'/>
              <Schedule />
              <div className="pt-5"></div>
              <MapLocation/>
            </div>
          </div>
      </div>
    </div>
  );
}
