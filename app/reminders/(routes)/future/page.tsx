import React from "react";
import { ReminderItem } from "../../components/ReminderItem";

export default function FuturePage() {
  return (
    <div className="p-2">
      <div className="p-4">
        <h2 className="text-white text-3xl text-center">
          Recordatorios futuros
        </h2>
      </div>
      <div>
        <ReminderItem />
      </div>
    </div>
  );
}
