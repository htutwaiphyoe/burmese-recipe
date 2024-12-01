import { create } from "zustand";
import { CategoryStore } from "@/types/store";

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: "Dogs",
  setCategory: (category: string) => set({ category }),
}));
