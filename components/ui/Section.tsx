import Container from "./Container";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  className,
  containerClassName,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-36", className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
