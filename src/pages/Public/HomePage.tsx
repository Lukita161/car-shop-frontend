import { useQuery } from "@tanstack/react-query";
import "./HomePage.css";
import { getTopCars } from "../../api/Public/CarsApi";
import { ScrollArrows } from "../../components/Public/ScrollArrows";
import { lazy, useRef } from "react";
import { Link } from "react-router-dom";
import { CarCardHomePage } from "../../components/Public/HomePage/CarCardHomePage";
import { Footer } from "../../components/Public/UI/Footer";

const InfoSection = lazy(()=> import('../../components/Public/HomePage/InfoSection'))

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["topCars"],
    queryFn: getTopCars,
  });
  const scrollRef = useRef(null);

  return (
    <>
      <div className="w-full h-full">
        <main className="w-full h-full relative">
          <div className="gradient absolute w-full h-full inset-0"></div>
          <img
            src="/foto-homePage.jpg"
            className="absolute inset-0 object-cover w-full h-full object-[top]"
            alt=""
          />
          <section className="absolute inset-0 my-auto mt-8 mx-auto z-50 flex flex-col justify-center items-center">
            <div className="lg:w-[40%] w-[80%] text-center bg-black/55 p-3 shadow-lg rounded-lg">
              <h1 className="text-4xl text-cream font-black">
                Te ayudamos a encontrar tu <br /> proximo vehiculo
              </h1>
            </div>
            <div className="mt-16">
              <Link
                to={"/catalog"}
                className="flex flex-col p-5 rounded-3xl shadow-lg px-6 bg-primary/80 uppercase font-bold hover:bg-primary transition-colors duration-150"
              >
                <p className={`w-full h-full`}>
                  Ver todos los autos disponibles
                </p>
              </Link>
            </div>
          </section>
        </main>
        <div className="flex flex-col gap-28 sm:gap-28">
          <section className="min-w-full h-full py-6 md:mb-0 mt-8 border-t border-gray-200">
            <InfoSection />
          </section>
          <section className="min-w-full h-full relative mt-4 border-t border-gray-200 mb-6">
            <div className="flex flex-col">
              <h1 className="text-4xl text-gray-900 font-black mt-6 text-center underline">
                Comienza la busqueda de tu auto ideal
              </h1>
            </div>
            <div
              ref={scrollRef}
              className="w-[80vw] mx-auto overflow-x-hidden "
            >
              <div className="w-full items-center sm:mx-auto sm:items-start overflow-hidden flex flex-col md:flex-row mx-auto overflow-y-hidden sm:w-[170vw] mt-8 p-3 gap-8 shadow">
                {data?.map((car) => (
                  <CarCardHomePage key={car._id} car={car} />
                ))}
              </div>
            </div>
            <ScrollArrows scrollRef={scrollRef} />
            <div className="w-full text-center my-4 mt-6">
              <Link
                className="p-3 bg-primary font-black text-center px-16 rounded-3xl shadow-md hover:bg-[#677c6c] transition-colors duration-150"
                to={"/catalog"}
                replace
              >
                Ver todos los autos disponibles
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage