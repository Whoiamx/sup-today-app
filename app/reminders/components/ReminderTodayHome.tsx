"use client";

import { useNotes } from "@/app/store/notes";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col gap-4">
      {dataForToday.length === 0 ? (
        <p className=" text-gray-500 mt-8">
          No tienes recordatorios para hoy :)
        </p>
      ) : (
        dataForToday.map((info: any) => (
          <div
            key={info.id}
            className="bg-white rounded-xl shadow-ios px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition hover:bg-gray-100"
          >
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <p
                className={`text-xl font-semibold text-black ${
                  checkedItems[info.id!] ? "line-through" : ""
                }`}
              >
                {info.title}
              </p>

              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <p
                  className={`${checkedItems[info.id!] ? "line-through" : ""}`}
                >
                  {info.description}
                </p>
                <p
                  className={`${checkedItems[info.id!] ? "line-through" : ""}`}
                >
                  {new Date(info.createdAt).toLocaleDateString("es-AR")}
                </p>
              </div>
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
        ))
      )}
    </div>
  );
};
