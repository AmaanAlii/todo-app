import type { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: "primary" | "secondary";
};

export default function PrimaryButton({
  children,
  buttonType = "primary",
  className = "",
  ...buttonProps
}: PrimaryButtonProps) {
  return (
    <button
      className={`h-[45px] bg-cyan-800 w-full text-white 
      cursor-pointer rounded-md hover:bg-cyan-900 
      ${buttonType === "secondary" ? "opacity-[85%]" : ""}
      ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
