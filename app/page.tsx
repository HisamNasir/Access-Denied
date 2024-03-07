import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" font px-12 py-4 md:px-16 md:py-8 lg:px-18 lg:py-10 2xl:px-20 2xl:py-12 space-y-[38px] md:space-y-[48px] lg:space-y-[58px] xl:space-y-[68px] 2xl:space-y-[78px]">
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
        <div>
          <p className=" text-xs lg:text-md xl:text-lg 2xl:text-xl">
            YOUR IP ADDRESS HAS BEEN RESTRICTED AND IS CURRENTLY BANNED FROM
            USING OUR SERVICES.
          </p>
        </div>
      </div>
    </main>
  );
}
