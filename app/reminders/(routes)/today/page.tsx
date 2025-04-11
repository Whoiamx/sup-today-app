import React from "react";
import { ReminderItem } from "../../components/ReminderItem";

export default function TodayPage() {
  return (
    <div className="p-2">
      <div className="p-4">
        <h2 className="text-white text-3xl text-center">
          Recordatorios de hoy
        </h2>
      </div>
      <div>
        <ReminderItem />
      </div>
    </div>
  );
}
