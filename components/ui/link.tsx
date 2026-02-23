import { cn } from "@/helpers/cn";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function Link({ children, href, className }: LinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-primary underline-offset-4 hover:underline w-fit",
        className,
      )}
    >
      {children}
    </a>
  );
}
