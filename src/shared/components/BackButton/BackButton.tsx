import { cn } from "@shared/lib/utils";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { useNavigate } from "react-router";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  let navigate = useNavigate();
  return (
    <Button
      className={cn("w-max p-0", className)}
      variant="link"
      onClick={() => navigate(-1)}
    >
      <Typography>{"< назад"}</Typography>
    </Button>
  );
}
