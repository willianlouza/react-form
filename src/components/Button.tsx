interface ButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  function color(from: boolean) {
    switch (props.color) {
      case "green":
        return from ? "from-green-400" : "to-green-700";
      case "blue":
        return from ? "from-blue-400" : "to-blue-700";
      case "gray":
        return from ? "from-gray-400" : "to-gray-700";
      default:
        return from ? "from-gray-400" : "to-gray-700";
    }
  }
  return (
    <button onClick={props.onClick}
      className={`
  bg-gradient-to-r 
 ${color(false)} 
 ${color(true)} 
  text-white 
  px-4 py-2 rounded-md ${props.className}
  `}
    >
      {props.children}
    </button>
  );
}
