import { useQuery, useQueryClient } from "@tanstack/react-query";
import { countRegisters, getCarsByPage } from "../../api/Public/CarsApi";
import { Navigate, useLocation } from "react-router-dom";
import { SkeletonLoader } from "../../components/UI/SkeletonLoader";
import { CarCard } from "../../components/Public/Catalog/CarCard";
import { FilterByBrand } from "../../components/Public/Catalog/FilterByBrand";
import { useEffect, useState } from "react";
import { CarsPagination } from "../../components/Public/Catalog/CarsPagination";
import { Footer } from "../../components/Public/UI/Footer";

const ITEMS_PER_PAGE = 30;
const totalCars = async () => {
  const carsRegister = await countRegisters();
  return carsRegister;
};

const getTotalPages = async () => {
  const totalCarsCount = await totalCars();
  return Math.ceil(totalCarsCount! / ITEMS_PER_PAGE);
};

export const CatalogPage = () => {
  const queryClient = useQueryClient()
  const [totalPages, setTotalPages] = useState(1)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const page = Number(queryParams.get('page') || 1)
  console.log(page)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["paginationCars"],
    queryFn: ()=>getCarsByPage(page),
    retry: 0,
    refetchOnWindowFocus: false,
  });
  useEffect(()=> {
    queryClient.refetchQueries({queryKey: ['paginationCars']})
  },[page, queryClient])
  useEffect(() => {
    getTotalPages().then((value) => setTotalPages(value));
  }, []);
  if (isError) return <Navigate to={"/"} replace />;
  if (isLoading) return <SkeletonLoader />;
  if(data) return (
    <>
    <section className="w-full flex flex-col items-center justify-between">

      <div className="w-[90%] m-4 p-3 flex flex-row justify-between items-center">
        <div className="">
          <h1 className="font-black text-3xl">Nuestros vehiculos:</h1>
          <p className="text-sm">Hora de encontrar tu auto ideal</p>
        </div>
        <div className="flex gap-2 items-center">
          <FilterByBrand />
        </div>
      </div>
      <div className="flex flex-col">
      <main className="mx-16 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 m-2 gap-7 pb-8">
        {data?.map((cars) => (
          <CarCard key={cars._id} cars={cars} />
        ))}
        
      </main>
      <div className="w-full mb-8">
          <CarsPagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
};
