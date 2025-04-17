import { APIResults } from "@/app/interfaces/type";
import { useNotes } from "@/app/store/notes";
import { ButtonEdit } from "@/app/ui/ButtonEdit";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface Props {
  data: APIResults[];
}

export const ReminderItem = ({ data }: Props) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const deleteReminder = useNotes((state) => state.deleteOneReminder);

  const updateReminderToDone = useNotes((state) => state.updateToDoneReminder);

  const handleCheckButton = (id?: number) => {
    if (id === undefined) return;

    // Togglear el estado de "checked"
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };

      updateReminderToDone(id, newCheckedItems[id]);

      return newCheckedItems;
    });
  };
  const handleDeleteReminder = (id: number) => {
    deleteReminder(id);
  };

  return (
    <div className="flex flex-col gap-2">
      {data.map((info) => (
        <div
          key={info.id}
          className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition hover:bg-gray-100"
        >
          <div className="flex flex-col gap-5">
            <RiDeleteBin6Fill
              onClick={() => handleDeleteReminder(info.id)}
              className="text-xs cursor-pointer text-red-500"
            />
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
