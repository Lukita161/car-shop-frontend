import { useNavigate, useParams } from "react-router-dom";
import { brand } from "../../../data/Brands";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const FilterByBrand = ()=> {
    const queryClient = useQueryClient()
    const params = useParams()

    const navigate = useNavigate()
    const [selectedBrand, setSelectedBrand] = useState(
      () => params.carBrand || "Todas"
    )
    const handleFilterCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      setSelectedBrand(e.target.value)
      };
      useEffect(() => { if (selectedBrand === "Todas") { navigate('/catalog'); } else { navigate(`/catalog/filter/brand/${selectedBrand}`); queryClient.invalidateQueries({ queryKey: ['filterCar'] }); } }, [selectedBrand, navigate, queryClient])
    return (
        <>
        <label htmlFor="filterBy">Filtrar por marca: {}</label>
          <select
            onChange={handleFilterCategory}
            className="p-1 rounded-md outline-none border border-primary hover:bg-gray-100 transition-colors"
            id="filterBy"
            value={selectedBrand}
          >
              <option value="Todas">Todos los modelos</option>
            {brand.map((brand) => (
              <option className="capitalize" value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </>
    )
}