type Props = {
  value: string;
  onChange: (value: string) => void;
};

function Input({ value, onChange }: Props) {
  return (
    <div>
      <label className="font-[var(--font-roboto)] text-base text-transparent lg:text-white block mb-2">
        Misión
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Misión"
        className="font-[var(--font-roboto)] text-base text-black border rounded-lg bg-white/80 pl-3 py-1 lg:py-2 w-full mb-4"
      />
    </div>
  );
}

export default Input;
