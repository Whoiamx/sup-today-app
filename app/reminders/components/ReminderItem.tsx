import { ButtonEdit } from "@/app/ui/ButtonEdit";
import { useState } from "react";

interface Props {
  data: APIResults[];
}

interface APIResults {
  id?: number;
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  createdAt?: Date;
  important?: boolean;
}

export const ReminderItem = ({ data }: Props) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleCheckButton = (id?: number) => {
    if (id === undefined) return;

    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // alterna entre true y false
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      {data.map((info) => (
        <div
          key={info.id}
          className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition hover:bg-gray-100"
        >
          <div className="flex flex-col gap-5">
            <p
              className={`text-xl font-semibold text-black ${
                checkedItems[info.id!] ? "line-through" : null
              } `}
            >
              {info.title}
            </p>

            <div>
              <p
                className={`text-sm text-gray-400 ${
                  checkedItems[info.id!] ? "line-through" : null
                }`}
              >
                {info.description}
              </p>
              <p
                className={`text-sm text-gray-400 ${
                  checkedItems[info.id!] ? "line-through" : null
                }`}
              >
                {info.createdAt
                  ? new Date(info.createdAt).toLocaleDateString("es-AR")
                  : ""}
              </p>
            </div>

            <ButtonEdit />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div
              onClick={() => handleCheckButton(info.id)}
              className={`w-5 h-5 rounded-full border-2 mt-1 cursor-pointer ${
                checkedItems[info.id!]
                  ? "bg-blue-600 border-primary"
                  : "border-primary"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
