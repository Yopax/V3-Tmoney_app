import React from "react";
import ButtonSectionOne from "./components/ButtonSectionOne";
import Image from "next/image";
import ContainerIntersections from "../ConteinerInterSecctions";

function GeneralSectionOne() {
  const bg =
    "flex flex-col justify-center items-center w-screen bg-cover h-screen  ";

  return (
    <>
      <section className={bg}>
        <div className="flex flex-col items-center justify-center text-white w-[50%] max-[768px]:w-[80%] md:w-[84%] lg:w-[70%] xl:w-[50%] 2xl:w-[55%]  h-full space-y-10 max-[1024px]:space-y-4 max-[425px]:mt-[50px] ">
          <div className="">
            <Image
              src="/img/Landing/favicon.ico"
              width={100}
              height={100}
              alt="Logo TMoney"
              className="w-16 h-16 max-sm:w-14 max-sm:h-14"
            />
          </div>
          <h2 className="text-center font-[Provicali] text-[74px] tracking-wide max-sm:text-5xl max-[320px]:text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl">
            THE BEST SCANNER OF SPORTS ARBITRATION
          </h2>
          <p className="text-center  leading-normal font-[Objective] text-[25px] max-sm:text-sm max-[320px]:text-[12px] md:text-lg 2xl:text-3xl ">
            BECOME A SUCCESSFUL{" "}
            <span className="font-black">SPORTS TRADER</span> WITH THE BEST TOOL
            IN THE WORLD OF
            <span className="font-black"> SPORTS ARBITRATION. </span>
          </p>
          <ButtonSectionOne />
        </div>
      </section>
    </>
  );
}

export default GeneralSectionOne;
