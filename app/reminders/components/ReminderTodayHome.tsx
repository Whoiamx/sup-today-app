"use client";

import { useNotes } from "@/app/store/notes";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";

interface Props {
  data: APIResults[];
}

interface APIResults {
  id: number;
  title: string;
  description: string;
  email: string;
  phone: string;
  sendEmail: boolean;
  sendWhatsApp: boolean;
  remindAt: Date;
  createdAt: Date;
  important: boolean;
}

export const ReminderTodayHome = () => {
  const addTodayNotes = useNotes((state) => state.gettingTodayData);
  const dataForToday = useNotes((state) => state.todayNotes);

  useEffect(() => {
    addTodayNotes();
  }, [addTodayNotes]);

  return (
    <>
      {dataForToday.map((info: any) => (
        <div
          key={info.id} // Asegurate de que `info` tenga un `id` único o usá otro identificador
          className="col-span-2 text-black bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition"
        >
          <div className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition">
            <div className="flex flex-col gap-5">
              <p className="text-xl font-semibold text-black">{info.title}</p>
              <div>
                <p className="text-sm text-gray-400">{info.description}</p>
                <p className="text-sm text-gray-400">
                  {new Date(info.createdAt).toLocaleDateString("es-AR")}
                </p>
                <FaEdit className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-5 h-5 rounded-full border-2 border-primary mt-1 cursor-pointer"></div>
        </div>
      ))}
    </>
  );
};
