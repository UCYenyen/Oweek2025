'use client';

import Image from 'next/image';
import MapImage from '../Images/map-image.png';

export default function MapLocation() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-[50px] font-bold text-center mb-6 w-full">Our Location</h2>
        
        <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border-5 border-white">
          <Image
            src={MapImage}
            alt="Map Location"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}