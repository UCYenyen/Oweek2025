import Logos from './components/logos'
import Countdown from './components/Countdown'
import Schedule from './components/Schedule'
import MapLocation from './components/MapLocation'
function App() {
  return (
    <div className="" >
       {/* <DisableZoom /> */}
      <div className="overflow-x-hidden min-h-screen flex flex-col items-center">
        <div className="relative bg-gradient-to-b from-[#e77a21] via-[#e2930a] to-[#e77a21] h-auto -z-[20]">
            <img
                className="absolute top-0 right-0 -z-10 w-[40%]"
                width={600}
                src="/Asset 1.svg"
                alt="Description of Asset One"
                draggable="false"
              />
            <div className="pt-10"></div>
            <Logos />
            <Countdown />
            {/* original gradient color : bg-gradient-to-b from-[#f9a817] via-[#e77a21] to-[#d76b12] */}
            <div className="relative w-screen pb-20 px-20 -z-[20]">
              <img
                className="absolute bottom-0 left-0 rotate-180 -z-10 w-[30vw]"
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
