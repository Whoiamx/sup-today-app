"use client";

import { useState } from "react";
import { ReminderCard } from "./ReminderCard";
import { Modal } from "@/app/components/Modal";

export const ReminderCategoryCards = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      <div className="min-h-screen flex items-start justify-center pt-10 bg-oliveLight">
        <div className="grid grid-cols-2 gap-x-7 gap-y-7 w-[90vw] max-w-[600px]">
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
            className="col-span-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Agregar nota
          </button>
          {showModal && <Modal showModal={showModal} />}
        </div>
      </div>
    </>
  );
};
