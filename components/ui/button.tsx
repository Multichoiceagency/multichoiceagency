"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Base button variants using cva
const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transform-gpu",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[hsl(var(--primary))] to-black dark:to-[hsl(var(--secondary))] text-white hover:bg-gradient-to-tl hover:from-[hsl(var(--secondary))] hover:to-[hsl(var(--primary))] hover:shadow-xl",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm text-white hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        ghost: "text-white hover:bg-accent hover:text-accent-foreground",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const Comp = asChild ? Slot : "button";

    // Mouse move handler to capture the cursor's position within the button
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "group relative overflow-hidden"
        )}
        ref={ref}
        {...props}
        onMouseMove={handleMouseMove}
        style={{
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        } as React.CSSProperties}
      >
        <span className="relative z-10">{props.children}</span>

        {/* Background effect following the cursor */}
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          }}
        ></span>

        {/* Dark mode-specific hover effect: white */}
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 dark:bg-white"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), white, transparent)`,
          }}
        ></span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
