import { FormEvent, useState } from "react";
import { useNotes } from "../store/notes";
import { NotificationValidation } from "../ui/NotificationValidation";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotification?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setShowModal, setShowNotification }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const [remindAt, setRemindAt] = useState(new Date());
  const createNewReminder = useNotes((state) => state.createReminder);

  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setShowError(true);
      setErrorMessage("El título del recordatorio es obligatorio.");
      return;
    }

    if (!description.trim()) {
      setShowError(true);
      setErrorMessage("La descripción del recordatorio es obligatoria.");
      return;
    }

    if (isNaN(remindAt.getTime())) {
      setShowError(true);
      setErrorMessage("Debes ingresar una fecha y hora válida.");
      return;
    }

    setShowError(false);
    setErrorMessage("");

    // Crear un nuevo recordatorio sin el id
    const newReminder = {
      title,
      description,
      important,
      remindAt,
      email: "ejemplo@ejemplo.com",
      sendEmail: false,
      sendWhatsApp: false,
      phone: "11123123",
    };

    // Llamar la función para crear el nuevo recordatorio
    createNewReminder(newReminder);

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      {showError && (
        <NotificationValidation
          errorMessage={errorMessage}
          setShowError={setShowError}
        />
      )}
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
              ¿Importante?
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
              Recuérdamelo
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
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
              onClick={() => {
                if (setShowNotification) {
                  setShowNotification((prevState) => !prevState);
                }
              }}
            >
              Guardar
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
