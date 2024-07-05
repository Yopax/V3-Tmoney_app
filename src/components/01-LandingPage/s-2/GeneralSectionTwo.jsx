import React from "react";
import { TabsSuscription } from "./components/TabsSuscription";
import ConteinerInterSecctions from "../ConteinerInterSecctions";

function GeneralSectionTwo() {
  return (
    <>
    
      <section className="flex-col mx-auto pt-10 justify-center w-screen h-full mt-32 bg-[#f1f1f1]">
        <div className="flex-col mx-auto w-full justify-center text-center pb-[14px] items-center ">
          <p className="font-[Provicali] text-5xl max-[425px]:text-3xl max-[425px]:mt-10 max-[425px]:mb-5 text-[#0a1a4a] leading-loose tracking-widest">
            ¡ADQUIERE UNA SUSCRIPCIÓN!
          </p>
          <p className="mx-auto font-[ObjectiveMedium] text-[28px] w-[55%] max-[425px]:w-[80%] max-[425px]:text-lg leading-8 text-[#f39d2f]">
            Tenemos los mejores precios del mercado para que puedas convertirte
            en el mejor SporTrader.
          </p>
        </div>
        <div className="flex mx-auto justify-center mb-[35px]">
          <TabsSuscription />
        </div>
        <div className="bg-wgite border h-[145px]">dasd</div>
      </section>
    </>
  );
}

export default GeneralSectionTwo;
