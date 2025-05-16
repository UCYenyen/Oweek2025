import Logos from './components/logos'
import Countdown from './components/Countdown'
import Schedule from './components/Schedule'
import MapLocation from './components/MapLocation'
function App() {
  return (
    <div className="" >
       {/* <DisableZoom /> */}
      <div className="overflow-x-hidden min-h-screen flex flex-col items-center">
        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(rgba(249, 168, 23, 0.3), rgba(241, 122, 33, 0.5)), url(${"/oweek_background.png"}`}}>
            <div className="pt-10"></div>
            <Logos />
              <div className="">
              <div className="pt-10"></div>
              <Countdown />
          </div>
            <div className="pt-10"></div>
            {/* original gradient color : bg-gradient-to-b from-[#f9a817] via-[#e77a21] to-[#d76b12] */}
            <div className="relative bg-[#e77a21] w-screen p-20">
              <img
              className="absolute top-0 right-0"
              width={400}
              src="/Asset 1.svg"
              alt="Description of Asset One"
              draggable="false"
            />
            <img
              className="absolute bottom-0 left-0 rotate-180"
              width={400}
              src="/Asset 1.svg"
              alt="Description of Asset One"
              draggable="false"
            />
              <Schedule />
              <div className="pt-5"></div>
              <MapLocation/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
