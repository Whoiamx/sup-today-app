import { create } from "zustand";

interface State {
  allNotes: [];
  todayNotes: [];
  importantNotes: [];
  futureNotes: [];
  gettingData: () => void;
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
  };
});
