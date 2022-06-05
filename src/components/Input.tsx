interface InputProps {
  label: string;
  tipo?: "text" | "number";
  value: any;
  readonly?: boolean;
  className?: string;
  valueChanged?: (value: any) => void;
}
export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.label}</label>
      <input
        onChange={(e) => props.valueChanged?.(e.target.value)}
        type={props.tipo ?? "text"}
        value={props.value}
        readOnly={props.readonly}
        className={`
          border border-purple-500 rounded-lg 
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.readonly ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
