import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}