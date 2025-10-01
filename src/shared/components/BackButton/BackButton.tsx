import { cn } from "@shared/lib/utils";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();
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
