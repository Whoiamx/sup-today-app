"use client";

import { useNotes } from "@/app/store/notes";
import { ReminderItem } from "../../components/ReminderItem";
import { useEffect } from "react";

export default function AllPage() {
  const data = useNotes((state) => state.allNotes);
  const addNotes = useNotes((state) => state.gettingData);

  useEffect(() => {
    addNotes();
  }, [addNotes]);

  return (
    <div className="p-2">
      <div className="p-4">
        <h2 className="text-black text-3xl text-center">
          Todos los recordatorios
        </h2>
      </div>
      <div>
        <ReminderItem data={data} />
      </div>
    </div>
  );
}
