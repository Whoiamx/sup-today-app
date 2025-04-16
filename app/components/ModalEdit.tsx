import { FormEvent, useEffect, useState } from "react";
import { useNotes } from "../store/notes";
import { APIResults } from "../reminders/components/ReminderItem";

interface Props {
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  id?: number;
  data: APIResults[];
}

export const ModalEdit = ({ setShowEditModal, id, data }: Props) => {
  useEffect(() => {
    const reminder = data.find((item) => item.id === id);
    if (reminder) {
      setSecondTitle(reminder.title);
      setSecondDescription(reminder.description);
      setIsImportantNow(reminder.important);
      setNewRemindAt(reminder.remindAt);
    }
  }, [id, data]);

  const [secondTitle, setSecondTitle] = useState("");
  const [secondDescription, setSecondDescription] = useState("");
  const [isImportantNow, setIsImportantNow] = useState();
  const [newremindAt, setNewRemindAt] = useState(new Date());

  const editReminder = useNotes((state) => state.updateReminder);

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id);
    editReminder(id, {
      title: secondTitle,
      description: secondDescription,
      remindAt: newremindAt,
      important: isImportantNow,
    });

    setShowEditModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-lg relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Editar recordatorio
        </h2>

        <form onSubmit={handleEdit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={secondTitle}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSecondTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Descripción
            </label>
            <textarea
              name="description"
              rows={3}
              value={secondDescription}
              className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSecondDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Importante?
            </label>
            <input
              type="checkbox"
              name="important"
              checked={isImportantNow}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2"
              onChange={(e) => setIsImportantNow(e.target.checked)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Fecha y hora
            </label>
            <input
              type="datetime-local"
              name="remindAt"
              value={
                newremindAt
                  ? new Date(newremindAt).toISOString().slice(0, 16)
                  : ""
              }
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setNewRemindAt(new Date(e.target.value))}
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setShowEditModal(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Guardar
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowEditModal(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
