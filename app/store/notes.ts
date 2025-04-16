import { create } from "zustand";

interface ReminderNote {
  id?: number;
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
  doneNotes: [];
  gettingData: () => void;
  gettingTodayData: () => void;
  createReminder: (note: ReminderNote) => void;
  gettingImportantData: () => void;
  updateReminder: (id: number, updateData: ReminderNote) => void;
  gettingOneReminderData: (id: number) => void;
}

export const useNotes = create<State>((set) => {
  return {
    allNotes: [],
    todayNotes: [],
    importantNotes: [],
    doneNotes: [],
    gettingData: async () => {
      const res = await fetch("/api/reminder");

      const data = await res.json();
      set({
        allNotes: data,
      });
    },

    gettingOneReminderData: async (id: number) => {
      try {
        const res = await fetch(`/api/reminder/${id}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    gettingTodayData: async () => {
      const res = await fetch("/api/reminder/today");

      const dataToday = await res.json();
      set({
        todayNotes: dataToday,
      });
    },
    gettingImportantData: async () => {
      const res = await fetch("/api/reminder/important", {
        cache: "no-store", // 🔥 evita la caché
      });
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

    updateReminder: async (id, updatedData) => {
      try {
        const res = await fetch(`/api/reminder/${id}`, {
          method: "PUT",
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        set((state) => ({
          allNotes: state.allNotes.map((note) =>
            note.id === id ? { ...note, ...updatedData } : note
          ),
        }));
      } catch (error) {
        console.log(error);
      }
    },
  };
});
