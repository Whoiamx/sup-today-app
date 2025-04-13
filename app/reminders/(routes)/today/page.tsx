"use client";

import { useNotes } from "@/app/store/notes";
import { ReminderItem } from "../../components/ReminderItem";
import { useEffect } from "react";

export default function TodayPage() {
  const data = useNotes((state) => state.allNotes);
  const addNotes = useNotes((state) => state.gettingData);

  useEffect(() => {
    addNotes();
  }, [addNotes]);

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
