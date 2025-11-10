import Image from "next/image";
import ShamsiClock from "../ShamsiClock/ShamsiClock";
import SidebarNav from "../SidebarNav/SidebarNav";

export default function SideBar() {
  return (
    <div className="hidden bg-card  md:w-64 w-32  min-h-screen border-l border-border shadow-md md:flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center py-4">
          <Image src={"/saipa-logo.webp"} width={50} height={50} alt="logo" />
          <p className="mt-2 font-bold text-primary text-lg">سایپالجستیک</p>
        </div>

        <SidebarNav />
      </div>

      <div className="flex justify-center p-4">
        <ShamsiClock />
      </div>
    </div>
  );
}
