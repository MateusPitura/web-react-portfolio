import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalStoreProps {
  showTooltip: boolean;
  toggleShowTooltip: (newState: boolean) => void;
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
}

export const useGlobalStore = create<GlobalStoreProps>()(
  persist(
    (set) => ({
      showTooltip: true,
      isDarkMode: false,
      toggleShowTooltip: (newState: boolean) => set({ showTooltip: newState }),
      toggleIsDarkMode: () =>
        set((state) => ({
          isDarkMode: !state.isDarkMode,
        })),
      language: "en",
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "pt" ? "en" : "pt" })),
    }),
    {
      name: "globalStore",
      partialize: (state) => ({ isDarkMode: state.isDarkMode, language: state.language }),
    }
  )
);
