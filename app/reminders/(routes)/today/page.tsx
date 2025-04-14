"use client";

import { useNotes } from "@/app/store/notes";
import { ReminderItem } from "../../components/ReminderItem";
import { useEffect } from "react";
import { ButtonBack } from "@/app/ui/ButtonBack";
import { ButtonAddNote } from "@/app/ui/ButtonAddNote";

export default function TodayPage() {
  const data = useNotes((state) => state.todayNotes);
  const addTodayNotes = useNotes((state) => state.gettingTodayData);

  useEffect(() => {
    addTodayNotes();
  }, [addTodayNotes]);

  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">
        <h2 className="text-black font-extrabold text-3xl text-center">
          Recordatorios de <span className="text-red-500">hoy</span>
        </h2>
      </div>
      <div>
        <ButtonBack />
      </div>
      <div>
        <ReminderItem data={data} />
      </div>
      <ButtonAddNote />
    </div>
  );
}
