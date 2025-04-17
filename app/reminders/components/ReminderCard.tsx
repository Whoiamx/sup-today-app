import Link from "next/link";
import { JSX } from "react";
import { FaCalendarCheck } from "react-icons/fa";
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
  };
  return colors[color] || "bg-gray-500";
};

const getIcon = (title: string) => {
  const icons: Record<string, JSX.Element> = {
    Hoy: (
      <IoCalendarNumberOutline className="text-blue-500 text-3xl md:text-4xl" />
    ),
    Importante: (
      <MdLabelImportantOutline className="text-orange-500 text-3xl md:text-4xl" />
    ),
    Todo: (
      <LuGalleryHorizontalEnd className="text-amber-700 text-3xl md:text-4xl" />
    ),
  };

  return (
    icons[title] || (
      <FaCalendarCheck className="text-gray-600 text-3xl md:text-4xl" />
    )
  );
};

export const ReminderCard = ({ title, color, count, route }: Props) => {
  return (
    <Link href={`/reminders/${route}`}>
      <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-ios w-full h-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[300px] flex flex-col justify-between cursor-pointer transition hover:bg-gray-100 border border-black">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {title}
          </h2>
          <div className={`w-3 h-3 rounded-full ${getColorClass(color)}`} />
        </div>
        <div className="my-2">{getIcon(title)}</div>
        <p className="text-xl sm:text-2xl font-bold text-gray-900">{count}</p>
      </div>
    </Link>
  );
};
