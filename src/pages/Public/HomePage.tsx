import { useQuery } from "@tanstack/react-query";
import "./HomePage.css";
import { getTopCars } from "../../api/Public/CarsApi";
import { ScrollArrows } from "../../components/Public/ScrollArrows";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [hover, setHover] = useState('')
  const { data } = useQuery({
    queryKey: ["topCars"],
    queryFn: getTopCars,
  });
  const scrollRef = useRef(null);

  return (
    <>
      <main className="w-full h-full relative">
        <div className="gradient absolute w-full h-full inset-0"></div>
        <img
          src="/foto-homePage.jpg"
          className="absolute inset-0 object-cover w-full h-full object-[top]"
          alt=""
        />
        <section className="absolute inset-0 my-auto mt-8 mx-auto z-50 flex flex-col justify-center items-center">
          <div className="w-[40%] text-center bg-black/30 p-3 shadow-lg rounded-lg">
            <h1 className="text-4xl text-cream font-black">
              Te ayudamos a encontrar tu <br /> proximo vehiculo
            </h1>
          </div>
          <div className="mt-16">
            <Link to={'/catalog'} className="flex flex-col p-5 rounded-3xl shadow-lg px-6 bg-primary/80 uppercase font-bold">
              <p className={`w-full h-full`}>Ver todos los autos disponibles</p>
            </Link>
          </div>
        </section>
      </main>
      <section className="min-w-full h-full relative mt-4 border-t border-gray-200">
        <div className="flex flex-col">
          <h1 className="text-3xl font-black mt-6 text-center underline">
            Comienza la busqueda de tu auto ideal
          </h1>
        </div>
        <div ref={scrollRef} className="w-[80vw] mx-auto overflow-x-hidden ">
          <div className="flex   overflow-y-hidden w-[170vw] mt-8 p-3 gap-8 shadow">
            {data?.map((car) => (
              <div onMouseEnter={()=> setHover(car._id)} onMouseLeave={()=> setHover('')} className="border rounded-sm shadow-md border-gray-400 w-[368px] h-[436px]">
                <div className="w-full flex flex-col">

                <div className="w-full h-80 relative overflow-hidden">
                  <img
                    className="absolute inset-0 object-cover w-full h-full object-center cursor-pointer hover:scale-110 transition-transform duration-150"
                    src={car.image[0]}
                    alt="Image"
                    />
                </div>
                <h1 className={`${hover === car._id ? 'text-cyan-600': ''} text-xl font-normal m-3 mb-0 transition-colors duration-100 cursor-pointer`}>{car.carName}</h1>
                  <button className="border-2 border-primary px-16 mx-auto mt-4 font-extrabold py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-150">Conocer más</button>
                    </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollArrows scrollRef={scrollRef} />
        <div className="w-full text-center my-4 ">
          <Link className="p-3 bg-primary font-black text-center px-16 rounded-3xl shadow-md hover:bg-[#677c6c] transition-colors duration-150" to={'/catalog'} >Ver todos los autos disponibles</Link>
        </div>
      </section>
    </>
  );
};
