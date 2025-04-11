import Link from "next/link";

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

export const ReminderCard = ({ title, color, count, route }: Props) => {
  return (
    <Link href={`/reminders/${route}`}>
      <div className="bg-white rounded-3xl px-8 py-6 shadow-ios w-full max-w-[300px] h-[180px] flex flex-col justify-between cursor-pointer transition hover:bg-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <div className={`w-3 h-3 rounded-full ${getColorClass(color)}`}></div>
        </div>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
      </div>
    </Link>
  );
};
