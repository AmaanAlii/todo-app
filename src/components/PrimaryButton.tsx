export default function PrimaryButton(props) {
  return (
    <button
      className={`h-[45px] bg-cyan-800 w-full text-white 
      cursor-pointer rounded-md hover:bg-cyan-900 
      ${props.buttonType === "secondary" ? "opacity-[85%]" : ""}`}
    >
      {props.children}
    </button>
  );
}
