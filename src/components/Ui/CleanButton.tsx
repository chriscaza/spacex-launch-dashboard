type Props = {
  onClear: () => void;
};

function ClearButton({ onClear }: Props) {
  return (
    <button
      onClick={onClear}
      className="absolute right-6 font-[var(--font-roboto)] text-base font-bold text-white rounded cursor-pointer"
    >
      Limpiar
    </button>
  );
}

export default ClearButton;
