"use client";

import { forwardRef } from "react";
import { cn } from "@/helpers/cn";

export type InputProps = {
  label: string;
  id?: string;
  error?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, className, ...props }, ref) => {
    const inputId =
      id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-description"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full border border-secondary rounded-xl px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-black/20 text-foreground",
            error && "border-red-500",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
