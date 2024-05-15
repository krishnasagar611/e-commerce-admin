import React from "react";
import { getDoc, doc } from "firebase/firestore";
import { Store } from "@/types.db";
import { db } from "@/lib/firebase";

type Props = {};

interface DashboardOverviewProps {
  params: { storeId: string };
}

const DashboardOverview = async ({ params }: DashboardOverviewProps) => {
  const docSnapshot = await getDoc(doc(db, "stores", params.storeId));
  const store = docSnapshot.data() as Store;
  return <div>store name :{store.name}</div>;
};

export default DashboardOverview;
