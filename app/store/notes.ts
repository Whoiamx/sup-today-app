import { create } from "zustand";

interface ReminderNote {
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  createdAt?: Date;
  important: boolean;
}

interface State {
  allNotes: [];
  todayNotes: [];
  importantNotes: [];
  futureNotes: [];
  gettingData: () => void;
  gettingTodayData: () => void;
  createReminder: (note: ReminderNote) => void;
}

export const useNotes = create<State>((set) => {
  return {
    allNotes: [],
    todayNotes: [],
    importantNotes: [],
    futureNotes: [],
    gettingData: async () => {
      const res = await fetch("/api/reminder");

      const data = await res.json();
      set({
        allNotes: data,
      });
    },
    gettingTodayData: async () => {
      const res = await fetch("/api/reminder/today");

      const dataToday = await res.json();
      set({
        todayNotes: dataToday,
      });
    },

    createReminder: async (note: ReminderNote) => {},
  };
});
