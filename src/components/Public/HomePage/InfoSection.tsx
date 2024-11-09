export const InfoSection = () => {
  // las img pueden ser de 278px proba ambas opciones
  return (
    <div className="w-full h-full flex flex-col justify-center gap-44 md:flex-row lg:justify-around md:gap-8 items-center flex-wrap">
      <div className="lg:w-[338px] w-[180px] h-[180px] lg:h-[338px] ">
        <div className="w-full h-full  relative rounded-lg">
          <img
            src="/Image-2.jpg"
            alt="Imagen uno"
            className="w-full h-full absolute object-cover object-center rounded-lg"
          />
        </div>
        <div className="mt-3 pt-3 border-t-2 border-black">
          <p className="text-pretty">
            Buscamos los mejores vehiculos al menor precio, exclusivamente para
            vos
          </p>
        </div>
      </div>
      <div className="lg:w-[338px] w-[180px] h-[180px] lg:h-[338px] ">
        <div className="w-full h-full  relative">
          <img
            src="/Image-1.jpg"
            alt="Imagen uno"
            className="w-full h-full absolute object-cover object-center rounded-lg"
          />
        </div>
        <div className="mt-3 pt-3 border-t-2 border-black">
          <p className="text-pretty">
            Te asesoramos con los mejores profesionales para que encuentres el
            auto que mejor se adapte a tus necesidades
          </p>
        </div>
      </div>
      <div className="lg:w-[338px] w-[180px] h-[180px] lg:h-[338px] ">
        <div className="w-full h-full  relative">
          <img
            src="/Image-3.jpg"
            alt="Imagen uno"
            className="w-full h-full absolute object-cover object-center rounded-lg"
          />
        </div>
        <div className="mt-3 pt-3 border-t-2 border-black ">
          <p className="text-pretty">
            La experiencia de conducir tu auto soñado con nosotros es posible,
            hace tu sueño realidad
          </p>
        </div>
      </div>
    </div>
  );
};
