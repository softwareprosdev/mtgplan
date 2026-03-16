interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`rounded-lg border px-4 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors ${
          error
            ? "border-error focus:ring-error"
            : "border-neutral-200 focus:border-primary-light"
        }`}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
