import { db } from "@/lib/firebase";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { redirect } from "next/navigation";
import { Store } from "@/types.db";

import React from "react";

type Props = {};

interface setupProps {
  children: React.ReactNode;
}
async function Setuplayout({ children }: setupProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const storeSnap = await getDocs(
    query(collection(db, "stores"), where("userId", "==", userId))
  );

  let store = null as any;

  storeSnap.forEach((doc) => {
    store = doc.data() as Store;
    return;
  });
  console.log("store: ", store);

  if (store) {
    redirect(`/${store?.id}`);
  }
  return <div>{children}</div>;
}

export default Setuplayout;
