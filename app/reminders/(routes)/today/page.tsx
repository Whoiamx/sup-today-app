"use client";
import { useState } from "react";
import { ReminderItem } from "../../components/ReminderItem";

export default function TodayPage() {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    const res = await fetch("/api/reminder");

    const data = await res.json();
    setData(data);
    console.log(data);
  };

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

      <button
        className="bg-blue-500 p-2 rounded-sm text-white"
        onClick={() => fetchingData()}
      >
        Agregar Nota nueva
      </button>
    </div>
  );
}
