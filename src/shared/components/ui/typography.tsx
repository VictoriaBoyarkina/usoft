import { cn } from "@shared/lib/utils";

interface TypographyProps {
  type?:
    | "h2"
    | "big_regular"
    | "big_bold"
    | "medium_regular"
    | "medium_bold"
    | "small"
    | "cap";
  children: string | number | string[];
  className?: string;
}

const classNames = {
  h2: "text-[30px] font-normal",
  big_regular: "text-[20px] font-normal",
  big_bold: "text-[20px] font-semibold",
  medium_regular: "text-[16px] font-normal",
  medium_bold: "text-[16px] font-semibold",
  small: "text-[12px] font-normal",
  cap: "text-[10px] font-normal",
};

function Typography({
  type = "medium_regular",
  className,
  children,
}: TypographyProps) {
  return <span className={cn(classNames[type], className)}>{children}</span>;
}

export { Typography };
