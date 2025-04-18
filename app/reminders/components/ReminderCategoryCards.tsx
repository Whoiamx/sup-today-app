"use client";

import { useState } from "react";
import { ReminderCard } from "./ReminderCard";
import { Modal } from "@/app/components/Modal";
import { ReminderTodayHome } from "./ReminderTodayHome";
import { useNotes } from "../../store/notes";

interface Props {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReminderCategoryCards = ({ setShowNotification }: Props) => {
  const allNotes = useNotes((state) => state.allNotes.length);
  const todayNotes = useNotes((state) => state.todayNotes.length);
  const doneNotes = useNotes((state) => state.doneNotes.length);
  const importantNotes = useNotes((state) => state.importantNotes.length);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-start justify-center pt-10 bg-oliveLight px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[600px]">
          {/* Aplica centrado solo en pantallas pequeñas con 'sm:grid-cols-2' */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:justify-center sm:items-center">
            <ReminderCard
              title="Hoy"
              count={todayNotes}
              color="blue"
              route="today"
            />
            <ReminderCard
              title="Importante"
              count={importantNotes}
              color="red"
              route="important"
            />
            <ReminderCard
              title="Todo"
              count={allNotes}
              color="gray"
              route="all"
            />
            <ReminderCard
              title="Terminado"
              count={doneNotes}
              color="orange"
              route="done"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button
              onClick={() => setShowModal((prevState) => !prevState)}
              className="bg-blue-600 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-[260px] shadow"
            >
              + Agregar recordatorio
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <h3 className="text-black text-2xl sm:text-3xl font-semibold whitespace-nowrap">
              Tus recordatorios de <span className="text-red-500">hoy</span>
            </h3>
            <ReminderTodayHome />
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setShowNotification={setShowNotification}
        />
      )}
    </>
  );
};
