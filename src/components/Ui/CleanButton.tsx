type Props = {
  onClear: () => void;
};

function ClearButton({ onClear }: Props) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="absolute right-0 md:right-6 z-20 font-[var(--font-roboto)] text-base font-bold text-white rounded cursor-pointer"
    >
      Limpiar
    </button>
  );
}

export default ClearButton;
