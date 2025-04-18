import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ModalEdit } from "../components/ModalEdit";
import { APIResults } from "../interfaces/type";

interface Props {
  id?: number;
  data: APIResults[];
}

export const ButtonEdit = ({ id, data }: Props) => {
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
      {showEditModal && (
        <ModalEdit setShowEditModal={setShowEditModal} id={id} data={data} />
      )}
    </>
  );
};
