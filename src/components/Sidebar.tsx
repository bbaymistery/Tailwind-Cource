"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the sidebar tabs matching the Figma layouts
const tabs = [
  { name: "Profile", path: "/", icon: "👤" },
  { name: "Socials", path: "/socials", icon: "🌐" },
  { name: "Portfolio", path: "/portfolio", icon: "💼" },
  { name: "Resume", path: "/resume", icon: "📄" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm h-fit">

    </aside>
  );
}
