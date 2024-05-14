"use client"
import Modal from "@/components/modal";
import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

export default function AdminHome({}: Props) {
  return (
    <div>
      <h1>
        <Modal
          title="Create Your store"
          description="This is your dexcripction"
          isOpen
          onClose={() => {}}
        ></Modal>
      </h1>
    </div>
  );
}
