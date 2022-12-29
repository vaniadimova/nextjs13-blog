import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 space-x-2">
      <div className="relative w-32">
        <Link href="/">
          <Image 
          className="rounded-full"
          src="https://i.pinimg.com/originals/74/01/80/7401800453ff548243c9cd9cd23140d9.jpg"
          alt="Logo" 
          width={50} 
          height={50} priority 
          />
        </Link>
      </div>

      <div>
        <Link
          href="/studio"
          className="flex items-center justify-center px-6 py-2 rounded-full duration-150 bg-[#202020] hover:bg-[#373737] text-white text-xl font-semibold"
        >
          StudioV
        </Link>
      </div>
    </header>
  );
}

export default Header;