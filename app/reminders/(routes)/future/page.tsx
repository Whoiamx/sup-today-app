"use client";

import { ReminderItem } from "../../components/ReminderItem";
import { ButtonBack } from "@/app/ui/ButtonBack";
import { ButtonAddNote } from "@/app/ui/ButtonAddNote";

export default function FuturePage() {
  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="p-4">
        <h2 className="text-black text-3xl text-center">
          Recordatorios futuros
        </h2>
      </div>
      <div>
        <ButtonBack />
      </div>
      <div>
        <ReminderItem data={[]} />
      </div>
      <ButtonAddNote />
    </div>
  );
}
