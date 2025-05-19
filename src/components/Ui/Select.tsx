type Option = {
    label: string;
    value: string;
}

type Props = {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

function Select({ label, options, value, onChange }: Props) {
    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;