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
    <div className="flex flex-col gap-4">
      {data.map((info) => (
        <div
          key={info.id}
          className="bg-white rounded-xl shadow-ios px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition hover:bg-gray-100"
        >
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <RiDeleteBin6Fill
              onClick={() => handleDeleteReminder(info.id)}
              className="text-lg cursor-pointer text-red-500"
            />

            <p
              className={`text-xl font-semibold text-black ${
                checkedItems[info.id!] ? "line-through" : ""
              }`}
            >
              {info.title}
            </p>

            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p className={`${checkedItems[info.id!] ? "line-through" : ""}`}>
                {info.description}
              </p>
              <p className={`${checkedItems[info.id!] ? "line-through" : ""}`}>
                {info.remindAt
                  ? new Date(info.remindAt).toLocaleDateString("es-AR")
                  : ""}
              </p>
            </div>

            <ButtonEdit id={info.id} data={data} />
          </div>

          <div className="flex items-center justify-end sm:justify-center">
            <div
              onClick={() => handleCheckButton(info.id)}
              className={`w-5 h-5 rounded-full border-2 cursor-pointer ${
                checkedItems[info.id!]
                  ? "bg-blue-600 border-blue-600"
                  : "border-blue-600"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
