"use client";

import Modal from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
export const StoreModal = () => {
    const StoreModal = useStoreModal();
  return (
    <>
      <Modal
        title="Create new store"
        description="Create new store"
        onClose={StoreModal.onClose}
        isOpen={StoreModal.isOpen}
      >
        
      </Modal>
    </>
  );
};
