import ContainerIntersections from "@/components/01-LandingPage/ConteinerInterSecctions";
import GeneralSectionOne from "@/components/01-LandingPage/s-1/GeneralSectionOne";
import GeneralSectionTwo from "@/components/01-LandingPage/s-2/GeneralSectionTwo";
import GeneralSectionTheer from "@/components/01-LandingPage/s-3/GeneralSectionTheer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="w-screen h-screen bg-sky-200 mt-[70px] flex justify-center items-center relative bg-center 
      bg-[url('/img/Landing/Fondoseccion1.png')] max-[425px]:bg-[url('/img/Landing/Fondo_1-nuevo_sm.png')]">
        <div className="bg-yellow-100 text-center rounded-xl w-1/2 h-1/2  p-4 relative ">
          <p>Logo secundario</p>
          <p>EL MEJOR ESCÁNER DE ARBITRAJE DEPORTIVO</p>
          <p>description</p>
          <button className="bg-yellow-600 px-4 rounded-lg">Button</button>
        </div>
      </section>

      <div className="bg-white absolute rounded-xl -bottom-45 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-[200px] z-3">
        ju
      </div>

      <section className="w-screen h-screen bg-emerald-400 pt-36 relative flex flex-col justify-start items-center -z-10">
        <div className="bg-yellow-100 mx-auto rounded-xl w-4/5 h-1/5 p-4 mb-4"></div>
        <div className="bg-yellow-100 mx-auto rounded-xl w-4/5 h-2/3 p-4 mb-4"></div>
        <div className="bg-yellow-100 mx-auto w-full h-[17%] mt-auto"></div>
      </section>

      <section className="w-screen h-screen bg-[#091c52] relative space-y-8 py-2">
        <div className="w-full h-[30%] bg-[#07226f]"></div>
        <div className="w-full h-[70%] bg-[#07226f]"></div>
      </section>

      <section className="w-screen h-[240px] bg-[#f39d2f] relative space-y-8 py-2"></section>

      <section className="w-screen h-screen bg-[#091c52] relative space-y-8 py-2">
        <div className="w-full h-[20%] bg-[#07226f]"></div>
        <div className="w-full h-[60%] bg-[#07226f]"></div>
        <div className="w-full h-[10%] bg-[#07226f]"></div>
      </section>

      <section className="w-screen h-[400px] bg-[#610d64] relative space-y-8 py-10">
        <div className="flex mx-auto justify-center w-4/5 h-full rounded-xl bg-[#b6d336]">
          d
        </div>
      </section>

      <section className="bg-black w-screen h-56 text-white text-center">
        Footer Composition Component
      </section>
    </>
  );
}
