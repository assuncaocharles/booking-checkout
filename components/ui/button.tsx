import { ButtonHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/helpers/cn";

const buttonVariants = tv({
  base: "cursor-pointer",
  variants: {
    appearance: {
      primary: "bg-primary text-white font-semibold hover:bg-primary/90",
    },
    size: {
      md: "px-9 py-4 rounded-2xl text-base",
    },
  },
  defaultVariants: {
    size: "md",
    appearance: "primary",
  },
});

export type ButtonProps = VariantProps<typeof buttonVariants>;

export default function Button({
  size,
  appearance,
  className,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonVariants({ size, appearance }), className || "")}
      {...props}
    />
  );
}
