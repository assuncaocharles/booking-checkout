"use client";

import { forwardRef } from "react";
import { cn } from "@/helpers/cn";

export type TextareaProps = {
  label: string;
  id?: string;
  error?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full border border-secondary rounded-xl px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-black/20 text-foreground h-[94px] resize-none",
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

Textarea.displayName = "Textarea";

export default Textarea;
