"use client";

import { useRouter } from "next/navigation";

export const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={() => handleBack()}
      className=" bg-blue-600 text-white p-3 rounded-xl"
    >
      ⬅ Volver atras
    </button>
  );
};
