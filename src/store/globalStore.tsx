import { create } from "zustand";

interface GlobalStoreProps {
  showTooltip: boolean;
  toggleShowTooltip: (newState: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreProps>((set) => ({
  showTooltip: true,
  toggleShowTooltip: (newState: boolean) => set({ showTooltip: newState }),
}));
