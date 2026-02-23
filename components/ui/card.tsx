import { cn } from "@/helpers/cn";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-md border border-border",
        className,
      )}
    >
      {children}
    </div>
  );
}
