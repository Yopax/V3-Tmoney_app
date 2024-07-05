import React from 'react';

function ContainerIntersections() {
  return (
    <div className="flex max-[425px]:flex-col  bg-[#f39d2f] text-center justify-center items-center absolute rounded-xl -bottom-45 left-1/2 transform -translate-x-1/2 -translate-y-[30%] w-4/5 max-[768px]:w-full  max-[768px]:rounded-none h-[230px] z-1">
      <div className="w-[30%] max-sm:w-2/3 leading-7 ">
        <h2 className="text-[25px] font-[ObjectiveExtraBold] max-[425px]:text-lg max-md:text-lg max-lg:text-2xl text-[#0a1a4a] ">SEGURIDAD</h2>
        <p className="text-[14px] mt-2 font-[ObjectiveMedium] max-[425px]:text-xs max-md:text-sm max-lg:text-sm text-[#0a1a4a]">
          Tus datos se encuentran encriptados y no serán compartidos con nadie.
        </p>
      </div>
      <div className="w-[30%] max-sm:w-2/3 leading-7">
        <h2 className="text-[25px] font-[ObjectiveExtraBold] max-[425px]:text-lg max-md:text-lg max-lg:text-2xl text-[#0a1a4a] ">COMUNIDAD</h2>
        <p className="text-[14px] mt-2 font-[ObjectiveMedium] max-[425px]:text-xs max-md:text-sm max-lg:text-sm text-[#0a1a4a]">
          Mantenemos una comunicación fluida con nuestros usuarios.
        </p>
      </div>
      <div className="w-[30%] max-sm:w-2/3 leading-7">
        <h2 className="text-[25px] font-[ObjectiveExtraBold] max-[425px]:text-lg max-md:text-lg max-lg:text-2xl text-[#0a1a4a] ">RENTABILIDAD</h2>
        <p className="text-[14px] mt-2 font-[ObjectiveMedium] max-[425px]:text-xs max-md:text-sm max-lg:text-sm text-[#0a1a4a]">
          En poco tiempo podrás vivir de lo que más te apasiona.
        </p>
      </div>
      <p></p>
    </div>
  );
}

export default ContainerIntersections;
