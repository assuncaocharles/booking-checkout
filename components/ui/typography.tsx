import { cn } from "@/helpers/cn";

export type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

export function Subtitle({
  children,
  className,
  as: Component = "h2",
}: SubtitleProps) {
  return (
    <Component className={cn("text-title text-lg font-bold", className)}>
      {children}
    </Component>
  );
}

export type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
};

export function Description({
  children,
  className,
  as: Component = "p",
}: DescriptionProps) {
  return (
    <Component
      className={cn("text-sm font-normal text-description", className)}
    >
      {children}
    </Component>
  );
}
