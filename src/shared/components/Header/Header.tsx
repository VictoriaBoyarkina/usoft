import MessageIcon from "@shared/assets/message.svg?react";
import UserIcon from "@shared/assets/user.svg?react";

export default function Header() {
  return (
    <header className="w-full absolute right-0 py-7 px-8 flex justify-end items-center -z-10">
      <div className="flex items-center gap-x-8 ">
        <MessageIcon />
        <UserIcon />
      </div>
    </header>
  );
}
