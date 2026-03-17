import { create } from "zustand";
import { AppSlice, createAppSlice } from "./appSlice";

export type StoreState = AppSlice;

export const useStore = create<StoreState>()((...args) => ({
  ...createAppSlice(...args),
}));
