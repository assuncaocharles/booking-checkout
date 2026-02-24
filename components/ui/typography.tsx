import { cn } from "@/helpers/cn";

export type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p";
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
