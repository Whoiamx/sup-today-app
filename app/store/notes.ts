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
  allNotes: ReminderNote[];
  todayNotes: [];
  importantNotes: [];
  futureNotes: [];
  gettingData: () => void;
  gettingTodayData: () => void;
  createReminder: (note: ReminderNote) => void;
  gettingImportantData: () => void;
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
    gettingImportantData: async () => {
      const res = await fetch("/api/reminder/today");

      const dataImportant = await res.json();
      set({
        importantNotes: dataImportant,
      });
    },

    createReminder: async (note: ReminderNote) => {
      try {
        const res = await fetch("/api/reminder", {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const newReminder = await res.json();
        set((state) => ({
          allNotes: [...state.allNotes, newReminder],
        }));
      } catch (error) {
        console.log(error);
      }
    },
  };
});
