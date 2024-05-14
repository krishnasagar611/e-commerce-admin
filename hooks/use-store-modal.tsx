import { create } from "zustand";

interface usestoreModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<usestoreModalProps>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));