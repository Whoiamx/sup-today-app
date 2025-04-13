"use client";

import { useNotes } from "@/app/store/notes";
import { useEffect } from "react";

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
}

export const ReminderItem = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {data.map((info: any) => (
        <div
          key={info.id}
          className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-center transition hover:bg-gray-100"
        >
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold text-black">{info.title} </p>
            <div>
              <p className="text-sm text-gray-400">{info.description}</p>
              <p className="text-sm text-gray-400">
                {new Date(info.createdAt).toLocaleDateString("es-AR")}
              </p>
            </div>
          </div>
          <div className="w-5 h-5 rounded-full border-2 border-primary mt-1"></div>
        </div>
      ))}
    </div>
  );
};
