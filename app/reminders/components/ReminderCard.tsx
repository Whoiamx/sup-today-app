import Link from "next/link";
import { JSX } from "react";
import { FaBell, FaCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { MdLabelImportantOutline } from "react-icons/md";

interface Props {
  title: string;
  color: string;
  count: number;
  route: string;
}
const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    gray: "bg-gray-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    // sumá más si querés
  };
  return colors[color] || "bg-gray-500";
};

const getIcon = (title: string) => {
  const icons: Record<string, JSX.Element> = {
    Hoy: <IoCalendarNumberOutline className="text-blue-500" />,
    Importante: <MdLabelImportantOutline className="text-orange-500" />,
    Todo: <LuGalleryHorizontalEnd className="text-amber-700" />,
  };

  return icons[title] || <FaCalendarCheck />;
};
export const ReminderCard = ({ title, color, count, route }: Props) => {
  return (
    <Link href={`/reminders/${route}`}>
      <div className="bg-white rounded-3xl  px-8 py-6 shadow-ios w-full max-w-[300px] h-[180px] flex flex-col justify-between cursor-pointer transition hover:bg-gray-100 border-1 border-black">
        <div className="flex items-center  justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className={`w-3 h-3 rounded-full ${getColorClass(color)}`}></div>
        </div>
        <div className="text-2xl text-gray-600">{getIcon(title)}</div>
        <p className="text-xl font-bold text-gray-900">{count}</p>
      </div>
    </Link>
  );
};
