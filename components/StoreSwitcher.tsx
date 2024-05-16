"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Store } from "@/types.db";
import { Check, ChevronsUpDown, Flag, StoreIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

type Props = {};

type PopOverProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends Props, PopOverProps {
  items: Store[];
}

const StoreSwitcher = ({ items }: StoreSwitcherProps) => {
  const params = useParams();
  const router = useRouter();

  const formatedStore = items?.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const currentStore = formatedStore?.find(
    (item: any) => item.value === params.storeId
  );

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const onstoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`${store.value}`);
  };
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            <StoreIcon className="h-4 w-4 shrink-0 mr-2" />
            {currentStore?.value
              ? formatedStore?.find(
                  (framework) => framework.value === currentStore?.value
                )?.label
              : "Select Store..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <div className="w-full px-2 py-2 flex items-center border rounded-md border-gray-100 min-w-4">
              <StoreIcon className="h-4 w-4 shrink-0 mr-2" />

              <input
                type="text"
                placeholder="Search store..."
                onChange={handleSearchTerm}
                className="flex-1 w-full outline-none"
              ></input>
            </div>
            <CommandList>
              <CommandGroup heading="Stores">
                {formatedStore?.map((store: any) => (
                  <CommandItem
                    key={store.value}
                    value={store.value}
                    onSelect={(currentValue) => {
                      // setOpen(currentValue === value ? "" : currentValue)
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentStore?.value === store.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {store.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StoreSwitcher;
