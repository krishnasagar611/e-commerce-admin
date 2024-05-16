"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {};

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Dashboard",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Services",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Design",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Menu",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Contact",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Label",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Params",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Status",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Payments",
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Order",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center  space-x-4 lg:space-x-6 pl-6")}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-background"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
