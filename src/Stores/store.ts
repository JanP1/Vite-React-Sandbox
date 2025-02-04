import { create } from "zustand";

interface VisibilityState {
  isSettingsVisible: boolean;
  toggleSettings: () => void;
}

export const useVisibilityStore = create<VisibilityState>((set) => ({
  isSettingsVisible: false, // Initial state

  toggleSettings: () =>
    set((state) => ({ isSettingsVisible: !state.isSettingsVisible })),
}));
