"use client";

import Modal from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Store should be at least 3 characters long" }),
});
export const StoreModal = () => {
  const StoreModal = useStoreModal();
  const [isLoaded, setIsLoaded] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoaded(true);
      // throw new Error("Not implemented");
      const response = await axios.post("/api/stores", values);
      console.log(response, "response");
      toast.success("Store created successfully");
      window.location.assign("/${response.data.id}");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoaded(false);
    }
  };
  return (
    <>
      <Modal
        title="Create a new store"
        description="Add the new store details"
        onClose={StoreModal.onClose}
        isOpen={StoreModal.isOpen}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoaded}
                          {...field}
                          placeholder="Your store name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex justify-end items-center w-full">
                  <Button
                    type="button"
                    variant={"outline"}
                    size={"sm"}
                    disabled={isLoaded}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" size={"sm"} disabled={isLoaded}>
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};
