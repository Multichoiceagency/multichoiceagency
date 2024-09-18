import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  onClick,
}) => {
  const buttonStyles =
    variant === "primary"
      ? "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white"
      : "shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:bg-black bg-gray-900 text-white";

  return (
    <button
      className={cn(
        "px-8 py-2 rounded-md font-light transition duration-200 ease-linear",
        buttonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
