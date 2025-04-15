import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ModalEdit } from "../components/ModalEdit";

export const ButtonEdit = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClickModalEdit = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <>
      <FaEdit
        onClick={handleClickModalEdit}
        className="text-gray-600 hover:text-gray-800 cursor-pointer"
      />
      {showEditModal && <ModalEdit setShowEditModal={setShowEditModal} />}
    </>
  );
};
