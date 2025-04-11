export const ReminderItem = () => {
  return (
    <div className="bg-white rounded-xl shadow-ios px-4 py-3 flex justify-between items-start transition hover:bg-gray-100">
      <div>
        <p className="text-base font-medium text-gray-900">Comprar frutas</p>
        <p className="text-sm text-gray-400">Hoy • 18:00</p>
      </div>
      <div className="w-5 h-5 rounded-full border-2 border-primary mt-1"></div>
    </div>
  );
};
