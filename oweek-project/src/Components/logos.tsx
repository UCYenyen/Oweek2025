import Image from 'next/image';
import oweekLogo from '../Images/Logo Oweek Putih.png';
import logoUC from '../Images/LOGO UC ROUND WHITE.png';

export default function Logos() {
  return (
    <div className="overflow-x-hidden flex gap-5 w-screen justify-center items-center">
      {/* Oweek Logo */}
      <div className="flex items-center justify-center bg-transparent">
        <Image
          src={oweekLogo}
          alt="Oweek Logo"
          width={125}
          height={125}
          className="object-contain"
        />
      </div>

      {/* UC Logo */}
      <div className="flex items-center justify-center bg-transparent">
        <Image
          src={logoUC}
          alt="UC Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </div>
  );
}