import { FormEvent, useState } from "react";
import { useNotes } from "../store/notes";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setShowModal }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const [remindAt, setRemindAt] = useState(new Date());

  const createNewReminder = useNotes((state) => state.createReminder);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createNewReminder({
      title,
      description,
      important,
      remindAt,
      email: "ejemplo@ejemplo.com",
      sendEmail: false,
      sendWhatsApp: false,
      phone: "11123123",
    });
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-lg relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Agregar recordatorio
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Título
            </label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Descripción
            </label>
            <textarea
              name="description"
              rows={3}
              className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Importante?
            </label>
            <input
              type="checkbox"
              name="important"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2"
              onChange={(e) => setImportant(e.target.checked)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Recordamelo
            </label>
            <input
              type="datetime-local"
              name="remindAt"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setRemindAt(new Date(e.target.value))}
            />
          </div>

          <div className="flex justify-between gap-4 mt-6 flex-wrap">
            <button
              type="button"
              onClick={() => setShowModal(false)} // Cierra el modal al hacer clic en "Cancelar"
              className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Guardar
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowModal(false)} // Cierra el modal al hacer clic en el icono de cerrar
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
