
import oweekLogo from '/Logo Oweek Putih.png';
import logoUC from '/LOGO UC ROUND WHITE.png';

export default function Logos() {
  return (
    <div className="overflow-x-hidden flex gap-5 w-screen justify-center items-center">
      {/* Oweek Logo */}
      <div className="flex items-center justify-center bg-transparent">
        <img
          src={oweekLogo}
          alt="Oweek Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* UC Logo */}
      <div className="flex items-center justify-center bg-transparent">
        <img
          src={logoUC}
          alt="UC Logo"
          width={130}
          height={130}
          className="object-contain"
        />
      </div>
    </div>
  );
}