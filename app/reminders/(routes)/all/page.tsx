"use client";

import { useNotes } from "@/app/store/notes";
import { ReminderItem } from "../../components/ReminderItem";
import { useEffect, useState } from "react";
import { ButtonBack } from "@/app/ui/ButtonBack";
import { ButtonAddNote } from "@/app/ui/ButtonAddNote";

export default function AllPage() {
  const data = useNotes((state) => state.allNotes);
  const addNotes = useNotes((state) => state.gettingData);

  useEffect(() => {
    addNotes();
  }, [addNotes]);

  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">
        <h2 className="text-black font-extrabold text-3xl text-center">
          Todos los recordatorios
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
