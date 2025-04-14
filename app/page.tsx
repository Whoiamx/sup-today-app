import Header from "./components/Header";
import { ReminderCategoryCards } from "./reminders/components/ReminderCategoryCards";

export default function Home() {
  return (
    <>
      <Header />

      <ReminderCategoryCards />
    </>
  );
}
