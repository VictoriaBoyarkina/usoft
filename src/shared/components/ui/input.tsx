import { Search } from "lucide-react";
import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <div className="relative">
      <div className="absolute flex items-center h-full px-3">
        <Search size={20} className="text-gray-02" />
      </div>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground rounded-[40px] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-8 w-full min-w-0 bg-transparent px-3 pl-10 py-1 text-base shadow-(--shadow) transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
