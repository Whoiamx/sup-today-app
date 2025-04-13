import { create } from "zustand";

interface State {
  allNotes: [];
  todayNotes: [];
  importantNotes: [];
  futureNotes: [];
  gettingData: () => void;
  gettingTodayData: () => void;
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
  };
});
