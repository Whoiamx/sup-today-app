import { ReminderItem } from "../../components/ReminderItem";

export default function AllPage() {
  return (
    <div className="p-2">
      <div className="p-4">
        <h2 className="text-white text-3xl text-center">
          Todos los recordatorios
        </h2>
      </div>
      <div>
        <ReminderItem />
      </div>
    </div>
  );
}
