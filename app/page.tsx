import Link from "next/link";
import Sidebar from "./ui/Sidebar";
import DateTimeComponent from "./lib/DateTimeComponent";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="  px-6 sm:px-12 py-4 md:px-10 2xl:px-20 2xl:py-12 sm:space-y-[18px] lg:space-y-[24px] 2xl:space-y-[70px]">
        <div className=" sm:flex space-y-6 max-sm:mb-6 justify-between">
          <div className=" max-h-min flex items-center gap-2 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[100px]">
            <h1 className=" text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[65px]">
              Access Denied
            </h1>
            <img
              alt=""
              className=" h-[20px] sm:h-[30px] md:h-9 lg:h-12 xl:h-[44px] 2xl:h-[65px] w-auto "
              src={"/location.svg"}
            />
          </div>
          <div className="sm:space-y-2 text-[7px] lg:text-xs sm:text-end ">
            <p>ID: 49f55e568bda4a399m21</p>
            <p>YOUR IP: 12.123.456.789</p>
            <p>
              <DateTimeComponent />
            </p>
          </div>
        </div>
        <div className=" flex max-md:flex-col  items-center gap-4">
          <div className=" space-y-[15px] sm:space-y-[22px] md:space-y-[26px] lg:space-y-[30px] 2xl:space-y-[70px] ">
            <p className=" max-sm:tracking-widestmax-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl ">
              YOUR IP ADDRESS HAS BEEN RESTRICTED AND IS CURRENTLY BANNED FROM
              USING OUR SERVICES.
            </p>
            <p className=" opacity-50 text-[9px] md:text-xs xl:text-md 2xl:text-xl ">
              Error Code: 661
            </p>
            <p className="max-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl lg:w-[65%] 2xl:w-[80%]">
              YOUR IP ADDRESS INDICATES THAT YOU&apos;RE ATTEMPTING TO ACCESS
              OUR SERVICES. YOU ARE PROHIBITED FROM USING THIS PLATFORM.
            </p>
            <p className="max-sm:tracking-widest  leading-5 md:leading-8 lg:leading-8 2xl:leading-[48px] text-[9px] md:text-xs xl:text-md 2xl:text-xl lg:w-[65%] 2xl:w-[80%]">
              Do you suspect that your IP address has been restricted in error?
              If so, please contact us at{" "}
              <Link
                href={"mailto:unblock@zimogroup.org"}
                className=" opacity-50 hover:underline"
              >
                unblock@zimogroup.org.
              </Link>
            </p>
            <Sidebar />
          </div>
          <img
            alt=""
            className=" h-28 md:h-36 lg:h-48 xl:h-58 2xl:h-[300px] w-auto xl:pr-32 2xl:pr-40"
            src={"/warning.svg"}
          />
        </div>
      </div>
      <footer className="grid grid-cols-2 lg:grid-cols-3 w-full">
        <div className=" hidden lg:block"></div>
        <div className="flex px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 w-full lg:justify-center">
          <img
            alt=""
            className=" h-[20px]  md:h-[35px] lg:h-[40px] xl:h-[40px] 2xl:h-[50px] w-auto "
            src={"/avaZima.svg"}
          />
        </div>
        <div className="flex px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 w-full justify-end lg:justify-end">
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
