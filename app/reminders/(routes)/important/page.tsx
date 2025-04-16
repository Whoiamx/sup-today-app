"use client";

import { useEffect } from "react";
import { ReminderItem } from "../../components/ReminderItem";
import { ButtonBack } from "@/app/ui/ButtonBack";
import { ButtonAddNote } from "@/app/ui/ButtonAddNote";
import { useNotes } from "@/app/store/notes";

export default function ImportantPage() {
  const getImportantReminders = useNotes((state) => state.gettingImportantData);
  const dataImporant = useNotes((state) => state.importantNotes);

  useEffect(() => {
    getImportantReminders();
  }, [getImportantReminders]);

  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">
        <h2 className="text-black font-semibold text-3xl text-center">
          Recordatorios <span className="text-orange-400">importantes</span>
        </h2>
      </div>
      <div>
        <ButtonBack />
      </div>
      <div>
        <ReminderItem data={dataImporant} />
      </div>
      <ButtonAddNote />
    </div>
  );
}
