"use client";

import { useState } from "react";

import { ReminderCategoryCards } from "./reminders/components/ReminderCategoryCards";
import { NotificationGood } from "./ui/NotificationGood";
import Header from "./components/Header";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [showEditNotification, setShowEditNotification] = useState(false);

  return (
    <>
      <Header />
      <ReminderCategoryCards setShowNotification={setShowNotification} />

      {showNotification && (
        <NotificationGood setShowNotification={setShowNotification} />
      )}
    </>
  );
}
