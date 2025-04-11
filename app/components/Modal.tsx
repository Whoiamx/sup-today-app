"use client";

import { FormEvent, useState } from "react";

interface Props {
  showModal: boolean;
}

export const Modal = ({ showModal }: Props) => {
  const [modalVisible, setShowModalVisible] = useState(showModal);

  console.log(modalVisible);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    modalVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-lg relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Agregar nota
          </h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Título
              </label>
              <input
                type="text"
                name="title"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Fecha y hora
              </label>
              <input
                type="datetime-local"
                name="remindAt"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setShowModalVisible(false)}
                className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition"
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
            onClick={() => setShowModalVisible(false)}
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};
