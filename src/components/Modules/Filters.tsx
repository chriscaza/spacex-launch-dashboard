import Select from "../Ui/Select";
import Input from "../Ui/Input";
import { type launchesData, type filters } from "../../types";

type Props = {
    rockets: Record<string, string>;
    launches: launchesData[];
    filters: filters;
    setFilters: React.Dispatch<React.SetStateAction<filters>>;
}

function Filters({ rockets, launches, filters, setFilters}: Props) {
    const handleChange = (field: keyof filters, value: string) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const rocketOptions = [
        { label: "Cohetes", value: "" },
        ...Object.entries(rockets).map(([id, name]) => ({
        label: name,
        value: id,
        })),
    ];

    const resultOptions = [
        { label: "Resultados", value: "" },
        { label: "Éxito", value: "success" },
        { label: "Fallo", value: "failure" },
    ];

    const uniqueYears = Array.from(
        new Set(launches.map((l) => new Date(l.date_local).getFullYear()))
    ).sort((a, b) => b - a);

    const yearOptions = [
        { label: "Años", value: "" },
        ...uniqueYears.map((year) => ({
        label: year.toString(),
        value: year.toString(),
        })),
    ];

    return (
        <div>
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

            <Input
                value={filters.mission}
                onChange={(e) => handleChange("mission", e)}
            />

        </div>
    )
}

export default Filters;