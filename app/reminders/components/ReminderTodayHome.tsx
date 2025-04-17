"use client";

import { APIResults } from "@/app/interfaces/type";
import { useNotes } from "@/app/store/notes";
import { useEffect, useState } from "react";

interface Props {
  data: APIResults[];
}

export const ReminderTodayHome = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const addTodayNotes = useNotes((state) => state.gettingTodayData);
  const dataForToday = useNotes((state) => state.todayNotes);

  const handleCheckButton = (id?: number) => {
    if (id === undefined) return;

    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    addTodayNotes();
  }, [addTodayNotes]);

  return (
    <>
      {dataForToday.map((info: any) => (
        <div
          key={info.id} // Asegurate de que `info` tenga un `id` único o usá otro identificador
          className="col-span-2 text-black bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition"
        >
          <div className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition">
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
                  {new Date(info.createdAt).toLocaleDateString("es-AR")}
                </p>
              </div>
            </div>
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
    </>
  );
};
