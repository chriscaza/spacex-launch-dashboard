type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

function Select({ label, options, value, onChange }: Props) {
  return (
    <div className="relative w-full">
      <label className="font-[var(--font-roboto)] font-normal text-xl text-white block mb-3">
        {label}
      </label>
      <select
        className="appearance-none font-[var(--font-roboto)] font-normal text-xl text-white border rounded-lg bg-white/20 pl-3 py-2 w-full mb-6"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-16 right-0 flex items-center pr-3">
        <svg
          className="h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      
    </div>
  );
}

export default Select;
