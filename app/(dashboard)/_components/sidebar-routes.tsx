"use client";

import { Layout, Compass } from "lucide-react";
import SidebarItem from "./sidebar-item";

const getRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = () => {
  const routes = getRoutes;
  return (
    <>
      <div className="flex flex-col w-full">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            href={route.href}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SidebarRoutes;
