import { ReminderCard } from "./ReminderCard";

export const ReminderCategoryCards = () => {
  return (
    <>
      <div className="min-h-screen flex items-start justify-center pt-10 bg-oliveLight">
        <div className="grid grid-cols-2 gap-x-7 gap-y-7 w-[90vw] max-w-[600px]">
          <ReminderCard title="Hoy" count={3} color="blue" route="today" />
          <ReminderCard
            title="Programados"
            count={5}
            color="orange"
            route="future"
          />
          <ReminderCard title="Todo" count={12} color="gray" route="all" />
          <ReminderCard
            title="Importante"
            count={2}
            color="red"
            route="important"
          />

          <button className="col-span-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
            Agregar nota
          </button>
        </div>
      </div>
    </>
  );
};
