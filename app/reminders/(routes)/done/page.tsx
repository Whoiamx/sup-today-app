"use client";

import { ReminderItem } from "../../components/ReminderItem";
import { ButtonBack } from "@/app/ui/ButtonBack";
import { ButtonAddNote } from "@/app/ui/ButtonAddNote";
import { useNotes } from "@/app/store/notes";
import { useEffect } from "react";

export default function FuturePage() {
  const data = useNotes((state) => state.doneNotes);
  const getDoneData = useNotes((state) => state.gettingDoneData);

  useEffect(() => {
    getDoneData();
  }, [getDoneData]);

  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">
        <h2 className="text-black font-semibold text-3xl text-center">
          Recordatorios{" "}
          <span className="font-semibold text-gray-500">terminados</span>
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
