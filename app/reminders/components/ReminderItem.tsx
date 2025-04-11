"use client";

import { useState } from "react";

export const ReminderItem = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    const res = await fetch("/api/reminder");

    const data = await res.json();
    setData(data);
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2">
      {data.map((info: any) => (
        <div className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-start transition hover:bg-gray-100">
          <div className="flex justify-around">
            <div>
              <p className="text-xl text-black">{info.title} </p>
              <p className="text-sm text-gray-400">{info.description}</p>
            </div>

            <div className="w-5 h-5 rounded-full border-2 border-primary mt-1"></div>
          </div>
        </div>
      ))}

      <button
        className="bg-blue-500 p-2 rounded-sm text-white"
        onClick={() => fetchingData()}
      >
        Agregar Nota nueva
      </button>
    </div>
  );
};
