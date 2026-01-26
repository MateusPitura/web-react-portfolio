import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const useGlobalStore = create(
  persist(
    combine(
      {
        showTooltip: true,
        isDarkMode: false,
        language: "en",
        carouselIndex: 0,
      },
      (set) => ({
        toggleShowTooltip: (newState: boolean) =>
          set({ showTooltip: newState }),
        toggleIsDarkMode: () =>
          set((state) => ({
            isDarkMode: !state.isDarkMode,
          })),
        toggleLanguage: () =>
          set((state) => ({ language: state.language === "pt" ? "en" : "pt" })),
        setCarouselIndex: (newIndex: number) =>
          set({ carouselIndex: newIndex }),
      }),
    ),
    {
      name: "globalStore",
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        language: state.language,
      }),
    },
  ),
);
