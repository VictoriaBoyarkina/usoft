interface TypographyProps {
  type?: "h2" | "big" | "medium_regular" | "medium_bold" | "small" | "cap";
  children: string;
}

const classNames = {
  h2: "text-[30]",
  big: "text-[20]",
  medium_regular: "text-[15]",
  medium_bold: "text-[15] font-semibold",
  small: "text-[12]",
  cap: "text-[10]",
};

function Typography({ type = "medium_regular", children }: TypographyProps) {
  return <span className={classNames[type]}>{children}</span>;
}

export { Typography };
