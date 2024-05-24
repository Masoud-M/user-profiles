function Button({
  label,
  disabled,
  onClick,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="px-4 py-2 transition-all bg-blue-400 rounded-md shadow-lg disabled:cursor-not-allowed hover:text-white hover:bg-blue-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
