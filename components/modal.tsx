import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}

function Modal({ title, description, onClose, isOpen, children }: ModalProps) {
  return (
    <Dialog open={isOpen} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
