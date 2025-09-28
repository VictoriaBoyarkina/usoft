import { Typography } from "../ui/typography";
import MessageIcon from "@/assets/message.svg?react";
import UserIcon from "@/assets/user.svg?react";

export default function Header() {
  return (
    <header className="py-5 px-8 flex justify-between items-center">
      <Typography>Медицинский отрыв/Учёт ВВК</Typography>
      <div className="flex items-center gap-x-8 ">
        <MessageIcon />
        <UserIcon />
      </div>
    </header>
  );
}
