import Image from "next/image";
import Link from "next/link";
import Sidebar from "./ui/Sidebar";

export default function Home() {
  return (
    <main>
      <div className=" relative font px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 space-y-[38px] md:space-y-[48px] lg:space-y-[45px] 2xl:space-y-[70px]">
        <div className=" max-h-min flex items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[100px]">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[65px]">
            Access Denied
          </h1>
          <Image
            width={46}
            height={65}
            alt=""
            className=" h-[30px] md:h-9 lg:h-12 xl:h-[60px] 2xl:h-[65px] w-auto "
            src={"/location.svg"}
          />
        </div>
        <div className=" flex max-md:flex-col justify-center items-center gap-4">
          <div className="space-y-[38px] md:space-y-[48px] lg:space-y-[45px] 2xl:space-y-[70px] ">
            <p className=" leading-8  xl:leading-[40px] 2xl:leading-[48px]  text-xs lg:text-sm xl:text-md 2xl:text-xl">
              YOUR IP ADDRESS HAS BEEN RESTRICTED AND IS CURRENTLY BANNED FROM
              USING OUR SERVICES.
            </p>
            <p className=" opacity-50 text-xs lg:text-md xl:text-lg 2xl:text-xl">
              Error Code: 661
            </p>
            <p className=" leading-8  xl:leading-[40px] 2xl:leading-[48px]  text-xs lg:text-sm xl:text-md 2xl:text-xl xl:w-[70%]">
              YOUR IP ADDRESS INDICATES THAT YOU&apos;RE ATTEMPTING TO ACCESS
              OUR SERVICES. YOU ARE PROHIBITED FROM USING THIS PLATFORM.
            </p>
            <p className=" leading-8  xl:leading-[40px] 2xl:leading-[48px]  text-xs lg:text-sm xl:text-md 2xl:text-xl xl:w-[70%]">
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
          <Image
            width={46}
            height={65}
            alt=""
            className=" h-28 md:h-36 lg:h-56 xl:h-64 2xl:h-[300px] w-auto "
            src={"/warning.svg"}
          />
        </div>
      </div>
      <div className="flex absolute bottom-0 px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 w-full justify-center">
        <Image
          width={46}
          height={65}
          alt=""
          className=" h-[20px] md:h-[35px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] w-auto "
          src={"/avaZima.svg"}
        />
      </div>
      <div className="flex absolute bottom-0  px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 w-full justify-end">
        <Image
          width={46}
          height={65}
          alt=""
          className=" h-[20px] md:h-[35px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] w-auto "
          src={"/zima.svg"}
        />
      </div>
    </main>
  );
}
