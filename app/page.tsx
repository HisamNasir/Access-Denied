import Link from "next/link";
import Sidebar from "./ui/Sidebar";
import DateTimeComponent from "./lib/DateTimeComponent";
import IpAddress from "./lib/IpAddress";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="  px-6 pt-8 md:px-10 2xl:px-[50px] 2xl:pt-12 sm:space-y-[18px] lg:space-y-[24px] 2xl:space-y-[50px]">
        <div className=" sm:flex max-sm:space-y-6 max-sm:mb-6 justify-between items-end">
          <div className=" max-h-min flex items-center gap-2 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[100px]">
            <h1 className=" text-xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-[85px] 2xl:px-[23px]">
              Access Denied
            </h1>
            <img
              alt=""
              className=" h-[16px] sm:h-[20px] md:h-6 lg:h-9 xl:h-[44px] 2xl:h-[65.9px] w-auto "
              src={"/location.svg"}
            />
          </div>
          <p className=" gap-1 lg:gap-2 xl:gap-4  2xl:gap-8 text-[7px] lg:text-[10px] xl:text-xs 2xl:text-[20px]  flex flex-col items-end sm:text-end 2xl:tracking-[0.103em]">
            <span className="">ID: 49f55e568bda4a399m21</span>
            <span>
              <IpAddress />
            </span>
            <span className="word-spacing-sm md:word-spacing-md lg:word-spacing-lg xl:word-spacing-xl">
              <DateTimeComponent />
            </span>
          </p>
        </div>
        <div className=" flex max-md:flex-col justify-between items-center gap-4">
          <div className=" space-y-[15px] sm:space-y-[22px] md:space-y-[26px] lg:space-y-[30px] 2xl:space-y-[50px] 2xl:px-[23px]">
            <p className=" font-normal max-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl ">
              YOUR IP ADDRESS HAS BEEN RESTRICTED AND IS CURRENTLY BANNED FROM
              USING OUR SERVICES.
            </p>
            <p className=" opacity-50 text-[9px] md:text-xs xl:text-md 2xl:text-xl ">
              Error Code: 661
            </p>
            <p className="max-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl lg:w-[65%] 2xl:w-[43vw]">
              YOUR IP ADDRESS INDICATES THAT YOU&apos;RE ATTEMPTING TO ACCESS
              OUR SERVICES. YOU ARE PROHIBITED FROM USING THIS PLATFORM.
            </p>
            <p className="max-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl lg:w-[65%] 2xl:w-[43vw]">
              Do you suspect that your IP address has been restricted in error?
              If so, please contact us at{" "}
              <Link
                href={"mailto:unblock@zimogroup.org"}
                className=" opacity-50 hover:opacity-100 transition-opacity duration-200 "
              >
                unblock@zimogroup.org
              </Link>
              .
            </p>
            <Sidebar />
          </div>
          <img
            alt=""
            className=" h-28 md:h-36 lg:h-48 xl:h-58 2xl:h-[300px] w-auto xl:pr-24 "
            src={"/warning.svg"}
          />
        </div>
      </div>
      <footer className="grid grid-cols-2 lg:grid-cols-3 w-full">
        <div className=" hidden lg:block"></div>
        <div className="flex px-6 pb-8 md:px-10 2xl:px-[50px] 2xl:pb-12 w-full lg:justify-center">
          <img
            alt=""
            className=" h-[20px]  md:h-[35px] lg:h-[40px] xl:h-[40px] 2xl:h-[50px] w-auto "
            src={"/avaZima.svg"}
          />
        </div>
        <div className="flex px-12 pb-4 md:px-16 md:pb-8 lg:px-18 lg:pb-10 2xl:px-20 2xl:pb-12 w-full justify-end lg:justify-end">
          <img
            alt=""
            className=" h-[20px] md:h-[35px] lg:h-[40px] xl:h-[40px] 2xl:h-[50px] w-auto "
            src={"/zima.svg"}
          />
        </div>
      </footer>
    </main>
  );
}
