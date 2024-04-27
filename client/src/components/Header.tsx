import { BsFillChatFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="px-4 py-2 bg-gray-900  w-full">
      <div className="font-bold flex gap-2 items-center">
        <BsFillChatFill className="text-green-400" />
        <p className="text-white">ChatFlow</p>
      </div>
    </div>
  );
}
