import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  countCarsRegisters,
  getCarByBrand,
  getCars,
} from "../../api/Admin/CarsManagementApi";
import { Link, Navigate, useLocation } from "react-router-dom";
import { CarCard } from "../../components/Admin/Catalog/CarCard";
import { brand } from "../../data/Brands";
import { useEffect, useState } from "react";
import { CarsPagination } from "../../components/Admin/Catalog/CarsPagination";
import { SkeletonLoader } from "../../components/UI/SkeletonLoader";

const pageSize = 12;
const totalCars = async () => {
  const carsRegister = await countCarsRegisters();
  return carsRegister;
};

const getTotalPages = async () => {
  const totalCarsCount = await totalCars();
  return Math.ceil(totalCarsCount! / pageSize);
};

const CatalogPage = () => {
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = Number(queryParams.get("page")) || 1;
  const queryClient = useQueryClient();
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: () => {
      return selectedBrand === "Todas"
        ? getCars(page)
        : getCarByBrand(selectedBrand);
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    getTotalPages().then((value) => setTotalPages(value));
  }, []);
  useEffect(() => {
    queryClient.refetchQueries({ queryKey: ["cars"] });
  }, [selectedBrand, queryClient, page]);
  const filterByBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
  };
  if (isError) {
    return <Navigate to={"/private/admin"} replace />;
  }
  return (
    <section className="w-full h-full">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-black text-black">Lista de vehiculos</h1>
        <Link
          to={"/private/admin/createCar"}
          className="p-3 bg-primary rounded-lg font-bold hover:bg-[#718b77] transition-colors"
        >
          Agregar vehiculo
        </Link>
        <div className="text-center">
          <label className="font-bold text-center mr-2" htmlFor="filterByBrand">
            Filtro por marca:{" "}
          </label>
          <select
            onChange={filterByBrand}
            className="rounded-lg shadow-lg bg-primary px-2 py-1 cursor-pointer outline-none"
            name="filterByBrand"
            id="filter"
          >
            <option>Todas</option>
            {brand.map((brand) => (
              <option key={brand} className="capitalize" value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className="w-full overflow-y-auto items-start justify-center grid-cols-2 grid-rows-2 grid lg:grid-rows-3 lg:grid-cols-4 px-6 gap-4">
            {data ? (
              data?.map((car) => <CarCard key={car._id} car={car} />)
            ) : (
              <p>Todavia no hay articulos creados</p>
            )}
          </div>
          <div className="w-full mt-4 mb-3 flex items-center justify-center">
            <CarsPagination page={page} totalPages={totalPages} />
          </div>
        </>
      )}
    </section>
  );
};

export default CatalogPage
