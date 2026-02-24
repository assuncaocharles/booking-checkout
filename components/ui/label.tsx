import { cn } from "@/helpers/cn";

export type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  as?: "label" | "span";
};

export function Label({
  children,
  htmlFor,
  className,
  as: Component = "label",
}: LabelProps) {
  const commonProps = {
    className: cn("text-sm font-semibold text-description", className),
  };
  return Component === "label" ? (
    <label htmlFor={htmlFor} {...commonProps}>
      {children}
    </label>
  ) : (
    <span {...commonProps}>{children}</span>
  );
}

export default Label;
