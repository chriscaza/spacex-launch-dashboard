type Props = {
  value: string;
  onChange: (value: string) => void;
};

function Input({value, onChange}: Props) {
    return (
        <div>
            <label className="font-[var(--font-roboto)] text-base text-white block mb-2">Buscar misión</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Nombre de la misión"
                className="font-[var(--font-roboto)] text-base text-white border rounded-lg bg-white/20 pl-3 py-2 w-full mb-4"
            />
        </div>
    )
}

export default Input;