import { useState } from "react";
import { Modal } from "../components/Modal";

export const ButtonAddNote = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-center col-span-2 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
      >
        + Agregar Recordatorio
      </button>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};
