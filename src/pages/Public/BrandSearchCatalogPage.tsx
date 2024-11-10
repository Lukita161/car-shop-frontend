import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarByBrand } from "../../api/Public/CarsApi";
import { SkeletonLoader } from "../../components/UI/SkeletonLoader";
import { CarCard } from "../../components/Public/Catalog/CarCard";
import { FilterByBrand } from "../../components/Public/Catalog/FilterByBrand";

const BrandSearchCatalogPage = () => {
  const params = useParams();
  const brandName = params.carBrand!;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["filterCar", brandName],
    queryFn: () => getCarByBrand(brandName!),
    retry: 0,
    refetchOnWindowFocus: false,
  });
  if (isError) return <Navigate to={"/catalog"} replace />;
  if (isLoading) return <SkeletonLoader />;
  return (
    <>
      <div className="m-4 flex flex-row justify-between items-center">
        <div className="flex items-start justify-center flex-col">
          <h1 className="font-black text-3xl">
            Nuestros vehiculos de{" "}
            <span className="capitalize">{brandName}</span> disponibles:
          </h1>
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

export default BrandSearchCatalogPage