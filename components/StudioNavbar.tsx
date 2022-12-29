import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#d29cd6]">
          <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-[#d29cd6]" />
          Back to Main Page
        </Link>
        
        <div className="justify-center hidden p-5 border-2 rounded-lg border-[#d29cd6] md:flex"> 
            <h1 className="font-bold text-white">
                Check our services
            </h1>
            <Link href='https://www.vaniad.com' className="text-[#d29cd6] ml-2 font-bold ">
                www.vaniadstudio.com
            </Link>
        </div>
      </div>
      
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;