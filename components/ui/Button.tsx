import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 font-semibold btn-primary",
        "hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}