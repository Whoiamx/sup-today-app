"use client";

import { useNotes } from "@/app/store/notes";
import { ReminderItem } from "../../components/ReminderItem";
import { useEffect } from "react";

export default function TodayPage() {
  const data = useNotes((state) => state.todayNotes);
  const addTodayNotes = useNotes((state) => state.gettingTodayData);

  useEffect(() => {
    addTodayNotes();
  }, [addTodayNotes]);

  return (
    <div className="p-2">
      <div className="p-4">
        <h2 className="text-black text-3xl text-center">
          Recordatorios de hoy
        </h2>
      </div>
      <div>
        <ReminderItem data={data} />
      </div>

      <button className="bg-blue-500 p-2 rounded-sm text-white">
        Agregar Nota nueva
      </button>
    </div>
  );
}
