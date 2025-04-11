import Header from "./components/Header";
import { Modal } from "./components/Modal";
import { ReminderCategoryCards } from "./reminders/components/ReminderCategoryCards";

export default function Home() {
  return (
    <>
      <Header />
      <ReminderCategoryCards />
    </>
  );
}
