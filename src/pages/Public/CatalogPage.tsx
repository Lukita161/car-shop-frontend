import { useQuery } from "@tanstack/react-query";
import { getAllCars } from "../../api/Public/CarsApi";
import { Navigate } from "react-router-dom";
import { SkeletonLoader } from "../../components/UI/SkeletonLoader";
import { CarCard } from "../../components/Public/Catalog/CarCard";
import { FilterByBrand } from "../../components/Public/Catalog/FilterByBrand";

export const CatalogPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isError) return <Navigate to={"/"} replace />;
  if (isLoading) return <SkeletonLoader />;
  return (
    <>
      <div className="m-4 flex flex-row justify-between items-center">
        <div className="">
          <h1 className="font-black text-3xl">Nuestros vehiculos:</h1>
          <p className="text-sm">Hora de encontrar tu auto ideal</p>
        </div>
        <div className="flex gap-2 items-center">
          <FilterByBrand />
        </div>
      </div>
      <main className="mx-16 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 m-2 gap-7 pb-8">
        {data?.map((cars) => (
          <CarCard cars={cars} />
        ))}
      </main>
    </>
  );
};
