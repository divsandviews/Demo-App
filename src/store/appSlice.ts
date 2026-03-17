import { StateCreator } from "zustand";

export interface AppSlice {
  appName: string;
  welcomeMessage: string;
  setWelcomeMessage: (message: string) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  appName: "Demo App",
  welcomeMessage: "Hello Everyone, Welcome to my Demo",
  setWelcomeMessage: (message: string) => set({ welcomeMessage: message }),
});
