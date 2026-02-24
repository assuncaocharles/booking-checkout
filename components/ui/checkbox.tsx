"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { useId } from "react";
import { cn } from "@/helpers/cn";

const Checkbox = CheckboxPrimitive.Root;

const CheckboxIndicator = CheckboxPrimitive.Indicator;

function CheckboxWithLabel({
  id: idProp,
  label,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Checkbox> & {
  label: React.ReactNode;
}) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <Checkbox
        id={id}
        className="size-4 shrink-0 rounded-[3px] border-2 border-secondary data-[state=checked]:border-primary data-[state=checked]:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        {...props}
      >
        <CheckboxIndicator className="flex items-center justify-center text-white">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current stroke-[2.5]"
          >
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CheckboxIndicator>
      </Checkbox>
      <label
        htmlFor={id}
        className="cursor-pointer text-sm text-description mt-[-4px]"
      >
        {label}
      </label>
    </div>
  );
}

export { Checkbox, CheckboxIndicator, CheckboxWithLabel };
export default Checkbox;
