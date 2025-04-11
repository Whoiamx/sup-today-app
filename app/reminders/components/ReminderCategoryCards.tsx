"use client";

import { useState } from "react";
import { ReminderCard } from "./ReminderCard";
import { Modal } from "@/app/components/Modal";

export const ReminderCategoryCards = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-start justify-center pt-10 bg-oliveLight">
        <div className="grid grid-cols-2 gap-x-9 gap-y-7 w-[90vw] max-w-[600px]">
          <ReminderCard title="Hoy" count={3} color="blue" route="today" />
          <ReminderCard
            title="Programados"
            count={5}
            color="orange"
            route="future"
          />
          <ReminderCard title="Todo" count={12} color="gray" route="all" />
          <ReminderCard
            title="Importante"
            count={2}
            color="red"
            route="important"
          />

          <button
            onClick={() => setShowModal((prevState) => !prevState)}
            className="col-span-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            + Agregar nota
          </button>
          <h3 className="text-black text-2xl">Tus recordatorios de hoy</h3>
          <div className="col-span-2 text-black bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-start transition hover:bg-gray-100"></div>

          {showModal && <Modal showModal={showModal} />}
        </div>
      </div>
    </>
  );
};
