import { APIResults } from "@/app/interfaces/type";
import { useNotes } from "@/app/store/notes";
import { ButtonEdit } from "@/app/ui/ButtonEdit";
import { FormEvent, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface Props {
  data: APIResults[];
}

export const ReminderItem = ({ data }: Props) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const editReminder = useNotes((state) => state.updateReminder);

  const handleCheckButton = (id?: number) => {
    if (id === undefined) return;

    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  //TODO: FUNCION QUE DE COMO TERMINADA LA TAREA/RECORDATORIO
  const handleDoneTasks = async (e: FormEvent<HTMLFormElement>) => {};

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
                {info.remindAt
                  ? new Date(info.remindAt).toLocaleDateString("es-AR")
                  : ""}
              </p>
            </div>

            <ButtonEdit id={info.id} data={data} />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="flex gap-2 items-center justify-center">
              {checkedItems[info.id!] && (
                <RiDeleteBin6Fill className="cursor-pointer" />
              )}
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
        </div>
      ))}
    </div>
  );
};
