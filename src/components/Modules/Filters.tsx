import Select from "../Ui/Select";
import Input from "../Ui/Input";
import ClearButton from "../Ui/CleanButton";
import { type launchesData, type filters } from "../../types";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";

//Propiedades que recibe el componente
type Props = {
  rockets: Record<string, string>;
  launches: launchesData[];
  filters: filters;
  setFilters: React.Dispatch<React.SetStateAction<filters>>;
};

function Filters({ rockets, launches, filters, setFilters }: Props) {
  //Actualiza un campo especifico, cohete, año, resultado
  const handleChange = (field: keyof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  //Limpiar los filtros
  const handleClear = () => {
    setFilters({
      rocketId: "",
      result: "",
      year: "",
      mission: "",
    });
  };

  //Opciones para el dropdown cohete
  const rocketOptions = [
    { label: "Cohetes", value: "" },
    ...Object.entries(rockets).map(([id, name]) => ({
      label: name,
      value: id,
    })),
  ];

  //Opciones para dropdown resultados
  const resultOptions = [
    { label: "Resultados", value: "" },
    { label: "Éxito", value: "success" },
    { label: "Fallo", value: "failure" },
  ];

  //Extrae los años unicos de los lanzamientos y los ordena
  const uniqueYears = Array.from(
    new Set(launches.map((l) => new Date(l.date_local).getFullYear()))
  ).sort((a, b) => b - a);

  //opciones para el dropdown años
  const yearOptions = [
    { label: "Años", value: "" },
    ...uniqueYears.map((year) => ({
      label: year.toString(),
      value: year.toString(),
    })),
  ];

  //Controla si se ve el panel de filtros unicamente en moviles
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative w-full lg:w-1/2 border-b md:border md:rounded-2xl border-white md:py-4 md:px-6 lg:p-6 h-20 md:h-1/2 lg:h-auto ">
      {/* Botón para limpiar todos los filtros */}
      <ClearButton onClear={handleClear} />

      <div className="flex items-center justify-between md:block relative">
        {/* Input de texto para filtrar por nombre */}
        <Input
          value={filters.mission}
          onChange={(e) => handleChange("mission", e)}
        />

        {/* Botón para mostrar/ocultar filtros en móvil */}
        <button
          className="md:hidden mt-4 ml-2 rounded text-white"
          onClick={() => setShowFilters(!showFilters)}
        >
          <BsFilter size={32} />
        </button>

        {/* Filtros desplegables para móvil, visible al activarlo*/}
        {showFilters && (
          <div className="absolute top-full left-0 w-full mt-2 z-10 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white flex flex-col md:hidden">
            <Select
              label="Cohete"
              options={rocketOptions}
              value={filters.rocketId}
              onChange={(v) => handleChange("rocketId", v)}
            />
            <Select
              label="Resultado"
              options={resultOptions}
              value={filters.result}
              onChange={(v) => handleChange("result", v)}
            />
            <Select
              label="Año"
              options={yearOptions}
              value={filters.year}
              onChange={(v) => handleChange("year", v)}
            />
          </div>
        )}
      </div>

      {/* Filtros para escritorio*/}
      <div className="hidden md:flex flex-col">
        <Select
          label="Cohete"
          options={rocketOptions}
          value={filters.rocketId}
          onChange={(v) => handleChange("rocketId", v)}
        />
        <Select
          label="Resultado"
          options={resultOptions}
          value={filters.result}
          onChange={(v) => handleChange("result", v)}
        />
        <Select
          label="Año"
          options={yearOptions}
          value={filters.year}
          onChange={(v) => handleChange("year", v)}
        />
      </div>
    </div>
  );
}

export default Filters;
