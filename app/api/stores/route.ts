import { db } from "@/lib/firebase";
import { auth } from "@clerk/nextjs/server";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 400 });
    }
    const { name } = body;
    if (!name) {
      return new NextResponse("Store name is missing", { status: 400 });
    }
    const StoreData = {
      name,
      userId,
      createdAt: serverTimestamp(),
    };
    const storeRef = await addDoc(collection(db, "stores"), StoreData);
    const id = storeRef.id;

    await updateDoc(doc(db, "stores", id), {
      ...StoreData,
      id,
      updatedAt: serverTimestamp(),
    });

    return NextResponse.json({ id, ...StoreData });
  } catch (error) {
    console.log(`STORES_POST_ERROR: ${error}`);
    return new NextResponse("Internal Server Error ", { status: 500 });
  }
};


