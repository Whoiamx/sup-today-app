import { create } from "zustand";
import { ReminderNote } from "../interfaces/type";
import { persist, createJSONStorage } from "zustand/middleware";

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
  deleteOneReminder: (id: number) => void;
  gettingDoneData: () => void;
  updateToDoneReminder: (id: number) => void;
}

export const useNotes = create<State>()(
  persist(
    (set) => ({
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
          cache: "no-store",
        });
        const dataImportant = await res.json();
        set({
          importantNotes: dataImportant,
        });
      },

      gettingDoneData: async () => {
        const res = await fetch("/api/reminder/done");
        const doneData = await res.json();
        set({
          doneNotes: doneData,
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

      updateToDoneReminder: async (id) => {
        try {
          const res = await fetch(`/api/reminder/done/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            throw new Error("Failed to update reminder");
          }

          const updatedReminder = await res.json();
          console.log("Reminder updated:", updatedReminder);
        } catch (error) {
          console.log("Error:", error);
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

      deleteOneReminder: async (id: number) => {
        try {
          const res = await fetch(`/api/reminder/${id}`, {
            method: "DELETE",
          });

          set((state) => ({
            allNotes: state.allNotes.filter((note) => note.id !== id),
          }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "reminder-storage", // Nombre de la clave en localStorage
      storage: createJSONStorage(() => localStorage), // Usamos createJSONStorage para envolver localStorage
    }
  )
);
